# views.py
from rest_framework import viewsets, status
from rest_framework.response import Response

from .models import Course, Lesson
from .serializers import *
from .pagination import CoursePagination

from rest_framework.views import APIView
from algoliasearch.search_client import SearchClient


class AlgoliaSearchView(APIView):
    def get(self, request, *args, **kwargs):
        query = request.GET.get('query', '')  # Поисковый запрос из параметров URL
        client = SearchClient.create('6U35HQJ5SA', '9276ceb51d9567d339989fedb166128c')
        index = client.init_index('Course')
        results = index.search(query)
        return Response(results['hits'])





class CourseModelViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all().order_by('-created_at')
    serializer_class = CourseSerializer
    pagination_class = CoursePagination  


class LessonModelViewSet(viewsets.ModelViewSet):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer

    # def get_serializer_class(self):
    #     if self.action == 'list' or self.action == 'retrieve':
    #         return LessonSerializer
    #     return LessonShortSerializer


class LessonID(APIView):
    def get(self, request, pk):
        # Filter courses by author
        courses = Lesson.objects.filter(id=pk)

        # Serialize the data
        serializer = LessonSerializer(courses, many=True)

        # Return the serialized data
        return Response(serializer.data)


class CourseAuthorID(APIView):
    def get(self, request, pk):
        # Filter courses by author
        courses = Course.objects.filter(author=pk)

        # Serialize the data
        serializer = CourseShortSerializer(courses, many=True)

        # Return the serialized data
        return Response(serializer.data)
