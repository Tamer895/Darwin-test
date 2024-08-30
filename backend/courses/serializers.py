# serializers.py
from rest_framework import serializers
from .models import Course, Lesson
from elements.serializers import VideoSerializer, TextSerializer

class LessonSerializer(serializers.ModelSerializer):
    videos = VideoSerializer(many=True, read_only=True)
    text = TextSerializer(many=True, read_only=True)

    class Meta:
        model = Lesson
        fields = [
            'id',
            'title',
            'description',
            'videos',
            'text',
            'created_at',
            'updated_at',
        ]

class CourseSerializer(serializers.ModelSerializer):
    preview_url = serializers.SerializerMethodField('get_preview_url')

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

    def get_preview_url(self, obj):
        if obj.preview:
            return obj.preview.url
        return None

