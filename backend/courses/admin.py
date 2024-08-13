from django.contrib import admin
from .models import *

# Register your models here.
class CourseAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description', 'author', 'language')
    search_fields = ('name', 'author', 'category')
    list_filter = ('language', 'level', 'category')


class LessonAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'description')
    search_fields = ('id', 'title'),
    list_filter = ('id', 'title')

    


admin.site.register(Course, CourseAdmin)
admin.site.register(Lesson, LessonAdmin)