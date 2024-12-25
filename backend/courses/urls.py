# urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *
from django.conf import settings
from django.conf.urls.static import static
from .views import AlgoliaSearchView

router = DefaultRouter()
router.register(r'course', CourseModelViewSet)
router.register(r'lesson', LessonModelViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('author_id/<int:pk>/', CourseAuthorID.as_view()),
    path('lesson_by_course_id/<int:pk>/', LessonID.as_view()),

    path('latest_courses/<str:level>/', LatestCourseView.as_view()),
    path('delete_course/<int:course_id>/', DeleteCourseView.as_view(), name='delete_course'),

    path('category/<str:category>/', CategoryCourseView.as_view()),

    path('search/', AlgoliaSearchView.as_view(), name='algolia-search'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
