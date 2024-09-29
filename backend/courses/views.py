# views.py
from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import Course, Lesson
from .serializers import *
from rest_framework.views import APIView


class CourseModelViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

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
