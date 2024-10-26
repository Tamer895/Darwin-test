from algoliasearch_django import AlgoliaIndex
from algoliasearch_django.decorators import register
from .models import Course

@register(Course)
class CourseIndex(AlgoliaIndex):
    fields = [
        'name', 
        'description', 
        'language', 
        'is_finished', 
        'is_private', 
        'category', 
        'rating', 
        'level', 
        'created_at', 
        'updated_at',
        'preview',
        'author_data',  # Добавляем вычисляемое свойство
    ]
    settings = {
        'searchableAttributes': ['name', 'description', 'language', 'category', 'level', 'author_data'],
    }
    index_name = 'Course'
