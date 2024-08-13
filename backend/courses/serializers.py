from rest_framework import serializers
from .models import *
from elements.serializers import *
from elements.models import *


class LessonSerializer(serializers.Serializer):
    videos = VideoSerializer(many=True)
    text = TextSerializer(many=True)

    class Meta:
        model = Lesson
        fields = [
            'id', 
            'title', 
            'description', 
            'videos',
            'text'
            'created_at',
            'updated_at',
        ]

    def create(self, validated_data):
        videos_data = validated_data.pop('videos')
        texts_data = validated_data.pop('text')
        lesson = Lesson.objects.create(**validated_data)
        
        for video_data in videos_data:
            video, created = Video.objects.get_or_create(**video_data)
            lesson.videos.add(video)
        
        for text_data in texts_data:
            text, created = Text.objects.get_or_create(**text_data)
            lesson.text.add(text)

        return lesson


class CourseSerializer(serializers.Serializer):

    preview_url = serializers.SerializerMethodField('get_preview_url')
    lessons = LessonSerializer(many=True)

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
            'lessons'
        ]

    def get_image_url(self, obj):
        if obj.preview:
            return obj.preview.url
        else:
            return None