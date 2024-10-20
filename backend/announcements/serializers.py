from rest_framework import serializers
from .models import *


class AnnouncementSerializer(serializers.Serializer):

    preview_url = serializers.SerializerMethodField('get_preview_url')
    video_url = serializers.SerializerMethodField('get_video_url')

    class Meta:
        model = Announcement
        fields = [
            'id',
            'title',
            'description',
            'category',

            'preview',
            'preview_url',

            'video',
            'video_url',

            'link',
            'created_at',
            'term'
        ]

    def get_preview_url(self, obj):
        if obj.preview:
            return obj.preview.url
        return None
    
    def get_video_url(self, obj):
        if obj.video:
            return obj.video.url
        return None