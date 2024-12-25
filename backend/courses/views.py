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


class DeleteCourseView(APIView):
    def delete(self, request, course_id):
        user_id = request.data.get('user_id')  # Parse data from the request body
        if not user_id:
            return Response({"error": "User ID is required"}, status=status.HTTP_400_BAD_REQUEST)
        
        course = get_object_or_404(Course, id=course_id, author=user_id)
        course.delete()
        return Response({"message": "Course deleted successfully"}, status=status.HTTP_204_NO_CONTENT)


class LatestCourseView(APIView):
    def get(self, request, level):
        # Retrieve only Course instances that have at least one related Lesson, ordered by created_at
        courses = Course.objects.filter(is_private=False, level=level).order_by('-created_at')

        # Применяем пагинацию
        paginator = CoursePagination()
        paginated_courses = paginator.paginate_queryset(courses, request)
        
        # Сериализуем данные
        serializer = CourseSerializer(paginated_courses, many=True)
        
        # Возвращаем результаты с пагинацией
        return paginator.get_paginated_response(serializer.data)



class LessonModelViewSet(viewsets.ModelViewSet):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer

    # def get_serializer_class(self):
    #     if self.action == 'list' or self.action == 'retrieve':
    #         return LessonSerializer
    #     return LessonShortSerializer



from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

class CategoryCourseView(APIView):
    def get(self, request, category):
        # Retrieve all courses
        courses = Course.objects.all()

        # Filter courses manually where category contains the given value
        filtered_courses = [course for course in courses if category in course.category]

        # Serialize the filtered data
        serializer = CourseSerializer(filtered_courses, many=True)

        # Return the serialized data
        return Response(serializer.data)




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
