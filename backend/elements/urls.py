from django.urls import path, include
from .views import *
from rest_framework.routers import DefaultRouter



router = DefaultRouter()
router.register(r'video', VideoModelViewSet)
router.register(r'text', TextModelViewSet)
router.register(r'image', ImageModelViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('create-video/', CreateVideoView.as_view(), name='create-video'),
    path('create-text/', CreateTextView.as_view(), name='create-text'),
    path('create-image/', CreateImageView.as_view(), name='create-image'),
]
