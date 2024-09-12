from rest_framework import serializers
from .models import *
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from courses.models import Course



class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        
        # Add user ID to the response
        data['id'] = self.user.id

        return data




class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)


    profile_photo_url = serializers.SerializerMethodField('get_profile_photo_url')

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
        else:
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