from django.urls import path
from .views import CreateTextView, CreateVideoView

urlpatterns = [

    path('create-video/', CreateVideoView.as_view(), name='create-video'),
    path('create-text/', CreateTextView.as_view(), name='create-text'),
]
