from django.urls import path
from .views import *
from rest_framework.routers import DefaultRouter



router = DefaultRouter()
router.register(r'video', VideoModelViewSet)
router.register(r'text', TextModelViewSet)
router.register('images', ImageModelViewSet, basename='image')

urlpatterns = [
    path('create-video/', CreateVideoView.as_view(), name='create-video'),
    path('create-text/', CreateTextView.as_view(), name='create-text'),
    path('create-image/', CreateImageView.as_view(), name='create-image'),
]
