from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *
from django.conf import settings
from django.conf.urls.static import static


from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)

router = DefaultRouter()
router.register(r'user', UserModelViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('register/', RegisterView.as_view(), name='register'),
    path('logout/', LogoutView.as_view(), name='logout'),

    path('add-to-my-courses/', AddCourseToMyCoursesAPIView.as_view(), name='add-to-my-courses'),
    path('my-courses/', MyCoursesView.as_view(), name='my-courses'),

    path('user_info/<int:pk>/', UserDetailInfo.as_view(), name='user_info'),
    
    path("getcode/", GetCode.as_view(), name='getcode'),
    path("forgot_password/", ForgotPassword.as_view(), name='forgot_password'),
    path("reset_password/", ResetPassword.as_view(), name='reset_password'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)