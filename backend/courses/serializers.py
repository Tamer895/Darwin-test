# serializers.py
from rest_framework import serializers
from .models import Course, Lesson
from elements.serializers import VideoSerializer, TextSerializer, ImageSerializer
from users.serializers import UserSerializer
from users.models import User


class LessonSerializer(serializers.ModelSerializer):
    videos = VideoSerializer(many=True, required=False)
    text = TextSerializer(many=True, required=False)
    images = ImageSerializer(many=True, required=False)
    # course = serializers.PrimaryKeyRelatedField(queryset=Course.objects.all())

    class Meta:
        model = Lesson
        fields = [
            'id',
            'title',
            'description',
            'course',
            'videos',
            'images',
            'text',
            'created_at',
            'updated_at',
            'is_active'
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

            for image in representation['images']:
                image['type'] = 'image'
                elements.append(image)

            # Сортируем элементы по полю 'order'
            elements = sorted(elements, key=lambda x: x['order'])

            representation['elements'] = elements
            del representation['videos']  # Убираем оригинальные несортированные поля
            del representation['text']
            del representation['images']

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
            'is_active'
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
    
    # Add author_data as a SerializerMethodField
    # author_data = serializers.SerializerMethodField('get_author_data')

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
            # 'author_data',  # Add this field to the response
        ]

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['author'] = UserSerializer(instance.author).data
        return representation

    def get_preview_url(self, obj):
        if obj.preview:
            return obj.preview.url
        return None

    # Define the method to retrieve author_data
    def get_author_data(self, obj):
        return obj.author_data
