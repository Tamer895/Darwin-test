from algoliasearch_django import AlgoliaIndex
from algoliasearch_django.decorators import register

from .models import Course

@register(Course)  # замените ModelName на имя вашей модели
class CourseIndex(AlgoliaIndex):
    fields = ('name', 'description', 'category')  # Укажите поля, которые должны индексироваться
    settings = {'searchableAttributes': ['name', 'description']}
