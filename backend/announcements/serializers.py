from rest_framework import serializers
from .models import *


# python manage.py migrate announcements zero
# python manage.py makemigrations
# python manage.py migrate



class AnnouncementSerializer(serializers.ModelSerializer):

    preview_url = serializers.SerializerMethodField('get_preview_url')
    video_url = serializers.SerializerMethodField('get_video_url')
    source_avatar_url = serializers.SerializerMethodField('get_source_url')

    class Meta:
        model = Announcement
        fields = [
            'id',
            'title',
            'description',
            'category',

            'source_name',
            'source_avatar',
            'source_avatar_url',

            'preview',
            'preview_url',

            'video',
            'video_url',

            'link',
            'created_at',
        ]

    def get_preview_url(self, obj):
        if obj.preview:
            return obj.preview.url
        return None
    
    def get_video_url(self, obj):
        if obj.video:
            return obj.video.url
        return None
    
    def get_source_url(self, obj):
        if obj.source_avatar:
            return obj.source_avatar.url
        return None
    




class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']