from django.contrib import admin
from .models import *

# Register your models here.
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('title', 'detailed')
    search_fields = ('title',)
    list_filter = ('detailed',)


admin.site.register(Category, CategoryAdmin)