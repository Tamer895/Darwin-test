from django.contrib import admin
from .models import Video, Text, Image

# Регистрация модели Video
@admin.register(Video)
class VideoAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'video')  # Отображение этих полей в списке объектов
    search_fields = ('title',)               # Возможность поиска по названию
    list_filter = ('title',)                 # Фильтрация по названию

# Регистрация модели Text
@admin.register(Text)
class TextAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'text')   # Отображение полей в списке объектов
    search_fields = ('title',)               # Возможность поиска по названию
    list_filter = ('title',)                 # Фильтрация по названию

@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'image')  # Отображение полей в списке объектов
    search_fields = ('title',)               # Возможность поиска по названию
    list_filter = ('title',)                 # Фильтрация по названию



