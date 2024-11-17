from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from courses.models import Lesson
from .serializers import *
from rest_framework import generics

class CreateVideoView(generics.CreateAPIView):
    queryset = Video.objects.all()
    serializer_class = VideoCreateSerializer


class CreateTextView(generics.CreateAPIView):
    queryset = Text.objects.all()
    serializer_class = TextCreateSerializer


class VideoModelViewSet(viewsets.ModelViewSet):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer


class TextModelViewSet(viewsets.ModelViewSet):
    queryset = Text.objects.all()
    serializer_class = TextSerializer


# View for creating an Image and associating it with a Lesson
class CreateImageView(generics.CreateAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageCreateSerializer


# ModelViewSet for managing Image objects
class ImageModelViewSet(viewsets.ModelViewSet):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer

