from django.contrib import admin
from .models import *

# Register your models here.
class AnnouncementAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'description')
    search_fields = ('title', 'category')
    list_filter = ('title', 'category')


admin.site.register(Announcement, AnnouncementAdmin)