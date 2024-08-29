# urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CourseModelViewSet

router = DefaultRouter()
router.register(r'course', CourseModelViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
