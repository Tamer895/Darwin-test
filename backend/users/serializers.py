from rest_framework import serializers
from .models import *
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer




class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        
        # Add user ID to the response
        data['id'] = self.user.id

        return data




class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    # profile_photo_url = serializers.SerializerMethodField('get_profile_photo_url')
    
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
            # 'profile_photo',
            # 'profile_photo_url',

            # 'active_courses',
            # 'finished_courses',
            # 'saved_courses',
            # 'certificates',
        ]

    # def get_profile_photo_url(self, obj):
    #     if obj.profile_photo:
    #         return obj.profile_photo.url
    #     else:
    #         return None
    def create(self, validated_data):
        user = User.objects.create(**validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user