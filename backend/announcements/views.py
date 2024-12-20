# # views.py
from rest_framework import viewsets, status
from rest_framework.response import Response

from .models import *
from .serializers import *


# Create your views here.
class AnnouncementModelViewSet(viewsets.ModelViewSet):
    queryset = Announcement.objects.all().order_by('-created_at') 
    serializer_class = AnnouncementSerializer