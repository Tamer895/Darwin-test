from django.urls import path
from .views import *
from rest_framework.routers import DefaultRouter



router = DefaultRouter()
router.register(r'video', VideoModelViewSet)
router.register(r'text', TextModelViewSet)

urlpatterns = [
    path('create-video/', CreateVideoView.as_view(), name='create-video'),
    path('create-text/', CreateTextView.as_view(), name='create-text'),
]
