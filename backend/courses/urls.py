# urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *
from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()
router.register(r'course', CourseModelViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('author_id/<int:pk>/', CourseAuthorID.as_view()),
    path('lesson_by_course_id/<int:pk>/', LessonID.as_view())
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
