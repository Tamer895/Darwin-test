# serializers.py
from rest_framework import serializers
from .models import Course, Lesson
from elements.serializers import VideoSerializer, TextSerializer
from users.serializers import UserSerializer
from users.models import User


class LessonSerializer(serializers.ModelSerializer):
    videos = VideoSerializer(many=True)
    text = TextSerializer(many=True)
    # course = serializers.PrimaryKeyRelatedField(queryset=Course.objects.all())

    class Meta:
        model = Lesson
        fields = [
            'id',
            'title',
            'description',
            'course',
            'videos',
            'text',
            'created_at',
            'updated_at',
        ]
    # def to_representation(self, instance):
    #     representation = super().to_representation(instance)
    #     representation['course'] = CourseSerializer(instance.course).data
    #     return representation
        def to_representation(self, instance):
            representation = super().to_representation(instance)
            elements = []

            # Добавляем видео в список с порядком
            for video in representation['videos']:
                video['type'] = 'video'
                elements.append(video)

            # Добавляем текст в список с порядком
            for text in representation['text']:
                text['type'] = 'text'
                elements.append(text)

            # Сортируем элементы по полю 'order'
            elements = sorted(elements, key=lambda x: x['order'])

            representation['elements'] = elements
            del representation['videos']  # Убираем оригинальные несортированные поля
            del representation['text']

            return representation

class LessonShortSerializer(serializers.ModelSerializer):
    # course = serializers.PrimaryKeyRelatedField(queryset=Course.objects.all())

    class Meta:
        model = Lesson
        fields = [
            'id',
            'title',
            'description',
            'course',
            'created_at',
            'updated_at',
        ]







class CourseShortSerializer(serializers.ModelSerializer):
    preview_url = serializers.SerializerMethodField('get_preview_url')
    author = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())


    class Meta:
        model = Course
        fields = [
            'id',
            'name',
            'description',
            'author',
            'language',
            'is_finished',
            'is_private',
            'category',
            'rating',
            'level',
            'intro_video',
            'created_at',
            'updated_at',
            'preview',
            'preview_url',
        ]

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['author'] = UserSerializer(instance.author).data
        return representation

    def get_preview_url(self, obj):
        if obj.preview:
            return obj.preview.url
        return None



class CourseSerializer(serializers.ModelSerializer):
    preview_url = serializers.SerializerMethodField('get_preview_url')
    author = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    lessons = LessonShortSerializer(many=True, read_only=True) 


    class Meta:
        model = Course
        fields = [
            'id',
            'name',
            'description',
            'author',
            'language',
            'is_finished',
            'is_private',
            'category',
            'rating',
            'level',
            'lessons',
            'intro_video',
            'created_at',
            'updated_at',
            'preview',
            'preview_url',
        ]

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['author'] = UserSerializer(instance.author).data
        return representation

    def get_preview_url(self, obj):
        if obj.preview:
            return obj.preview.url
        return None
