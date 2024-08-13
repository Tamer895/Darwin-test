from django.contrib import admin
from .models import *

# Register your models here.
class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'description', 'role', 'is_verificated')
    search_fields = ('username', 'email', 'description')
    list_filter = ('role', 'is_verificated')


admin.site.register(User, UserAdmin)