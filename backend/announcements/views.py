# # views.py
from rest_framework import viewsets, status
from rest_framework.response import Response

from .models import *
from .serializers import *

from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter
from django_filters import rest_framework as filters


class AnnouncementFilter(filters.FilterSet):
    date_range = filters.DateFromToRangeFilter(field_name="created_at")  # Диапазон дат
    category = filters.CharFilter(field_name="category", lookup_expr="icontains")  # Фильтрация по категории
    keywords = filters.CharFilter(method="filter_by_keywords")  # Поиск по ключевым словам в title и description

    class Meta:
        model = Announcement
        fields = ['date_range', 'category', 'keywords']

    def filter_by_keywords(self, queryset, name, value):
        return queryset.filter(
            models.Q(title__icontains=value) | models.Q(description__icontains=value)
        )


class AnnouncementModelViewSet(viewsets.ModelViewSet):
    queryset = Announcement.objects.all().order_by('-created_at') 
    serializer_class = AnnouncementSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter]
    filterset_class = AnnouncementFilter
    search_fields = ['title', 'description']  # Дополнительно, если нужно полнотекстовый поиск
