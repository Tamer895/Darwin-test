# views.py
from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import Course, Lesson
from .serializers import CourseSerializer, LessonSerializer
from rest_framework.views import APIView


class CourseModelViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer


class CourseAuthorID(APIView):
    def get(self, request, pk):
        # Filter courses by author
        courses = Course.objects.filter(author=pk)

        # Serialize the data
        serializer = CourseSerializer(courses, many=True)

        # Return the serialized data
        return Response(serializer.data)
