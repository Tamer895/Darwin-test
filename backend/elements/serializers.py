from rest_framework import serializers
from courses.models import *
from .models import *

class VideoSerializer(serializers.ModelSerializer):

    video_url = serializers.SerializerMethodField('get_video_url')

    class Meta:
        model = Video
        fields = ['id', 'title', 'video', 'video_url', 'order']

    def get_video_url(self, obj):
        if obj.video:
            return obj.video.url
        else:
            return None
    

class VideoCreateSerializer(serializers.ModelSerializer):
    lesson_id = serializers.IntegerField(write_only=True) # Получаем lesson по ID
    video_url = serializers.SerializerMethodField('get_video_url')  # Метод для получения URL видео

    class Meta:
        model = Video
        fields = ['title', 'video', 'video_url', 'order', 'lesson_id']  # Поля, которые отправляем/принимаем

    def create(self, validated_data):
        lesson_id = validated_data.pop('lesson_id')  # Извлекаем lesson_id из запроса
        lesson = Lesson.objects.get(id=lesson_id)  # Получаем урок по ID
        video = Video.objects.create(**validated_data)  # Создаем объект Video
        lesson.videos.add(video)  # Добавляем видео к уроку
        return video
    
    def get_video_url(self, obj):
        if obj.video:  # Проверяем, есть ли файл видео
            return obj.video.url
        return None  # Если видео нет, возвращаем None



class TextSerializer(serializers.ModelSerializer):
    class Meta:
        model = Text
        fields = ['id', 'title', 'text', 'order']


class TextCreateSerializer(serializers.ModelSerializer):
    lesson_id = serializers.IntegerField(write_only=True)  # Получаем ID урока

    class Meta:
        model = Text
        fields = ['title', 'text', 'order', 'lesson_id']  # Поля для создания

    def create(self, validated_data):
        lesson_id = validated_data.pop('lesson_id')  # Извлекаем lesson_id из запроса
        lesson = Lesson.objects.get(id=lesson_id)  # Получаем урок по ID
        text = Text.objects.create(**validated_data)  # Создаем текстовый элемент
        lesson.text.add(text)  # Добавляем текст в ManyToMany связь урока
        return text