from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext_lazy as _
from .models import User

class UserAdmin(BaseUserAdmin):
    # Define the fields to be used in displaying the User model.
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        (_('Personal info'), {'fields': ('first_name', 'last_name', 'email', 'description')}),
        (_('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        (_('Verification'), {'fields': ('is_verificated',)}),
        (_('Role & Preferences'), {'fields': ('role', 'preferences')}),
        (_('Important dates'), {'fields': ('last_login', 'date_joined')}),
    )

    # Add fields for when creating a new user.
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'password1', 'password2', 'email', 'birth_date', 'description', 'role', 'is_verificated', 'preferences'),
        }),
    )

    # Display these fields in the user list.
    list_display = ('username', 'email', 'first_name', 'last_name', 'is_verificated', 'role', 'is_staff')
    search_fields = ('username', 'first_name', 'last_name', 'email', 'role')
    ordering = ('username',)

# Register the custom User model with the admin site.
admin.site.register(User, UserAdmin)
