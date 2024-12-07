from rest_framework import serializers
from .models import *
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from courses.models import Course
from django.conf import settings


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        

        # user = User.objects.get(id=self.user.id)
        
        # Add user ID to the response
        data['id'] = self.user.id
        data['username'] = self.user.username
        data['first_name'] = self.user.first_name
        data['description'] = self.user.description
        data['last_name'] = self.user.last_name
        data['profile_photo'] = settings.DOMAIN + self.user.profile_photo.url if self.user.profile_photo else None
        data['is_staff'] = self.user.is_staff
        data['role'] = self.user.role
        data['preferences'] = self.user.preferences

        return data




class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)


    profile_photo_url = serializers.SerializerMethodField('get_profile_photo_url')

    profile_photo = serializers.ImageField(required=False, allow_null=True)

    my_courses = serializers.PrimaryKeyRelatedField(queryset=Course.objects.all(), many=True)
    active_courses = serializers.PrimaryKeyRelatedField(queryset=Course.objects.all(), many=True)
    finished_courses = serializers.PrimaryKeyRelatedField(queryset=Course.objects.all(), many=True)
    saved_courses = serializers.PrimaryKeyRelatedField(queryset=Course.objects.all(), many=True)


    class Meta:
        model = User
        fields = [
            'id', 
            'username', 
            'first_name', 
            'last_name', 
            'email', 
            'password',

            'date_joined',
            'birth_date',
            'description',
            'role',
            'is_verificated',
            'preferences',
            'profile_photo',
            'profile_photo_url',

            'my_courses',
            'active_courses',
            'finished_courses',
            'saved_courses',
        ]

    def get_profile_photo_url(self, obj):
        if obj.profile_photo:
            return obj.profile_photo.url
        return None
        
    def create(self, validated_data):
    # Извлекаем ManyToMany поля отдельно
        my_courses = validated_data.pop('my_courses', [])
        active_courses = validated_data.pop('active_courses', [])
        finished_courses = validated_data.pop('finished_courses', [])
        saved_courses = validated_data.pop('saved_courses', [])

        # Создаем пользователя без ManyToMany полей
        user = User.objects.create(**validated_data)
        
        # Устанавливаем пароль
        user.set_password(validated_data['password'])
        user.save()

        # Привязываем ManyToMany поля после создания пользователя
        user.my_courses.set(my_courses)
        user.active_courses.set(active_courses)
        user.finished_courses.set(finished_courses)
        user.saved_courses.set(saved_courses)

        return user