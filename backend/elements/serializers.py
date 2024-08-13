from rest_framework import serializers
from .models import *

class VideoSerializer(serializers.ModelSerializer):

    video_url = serializers.SerializerMethodField('get_video_url')

    class Meta:
        model = Video
        fields = ['id', 'title', 'video', 'video_url']

    def get_video_url(self, obj):
        if obj.video:
            return obj.video.url
        else:
            return None

class TextSerializer(serializers.ModelSerializer):
    class Meta:
        model = Text
        fields = ['id', 'title', 'text']