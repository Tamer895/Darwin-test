from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets, status
from .models import *
from .serializers import *
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from random import randint
from rest_framework_simplejwt.views import TokenObtainPairView
from django.conf import settings
from courses.serializers import CourseShortSerializer






class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer



class UserDetailInfo(APIView):
    def get(self, request, pk):
        user = User.objects.get(pk=pk)
        serializer = UserSerializer(user)
        return Response(serializer.data)



# Create your views here.
class GetCode(APIView):
    def post(self, request):

        email = request.data.get('email')

        if User.objects.filter(email=email).exists():
            return Response({
                "message": "exists",
                "boolean": True 
            })
        
        elif (email == ""):
            return Response({
                "message": "empty",
                "boolean": True 
            })
        elif ("@" not in email or not email.endswith("@gmail.com")):
            return Response({
                "message": "invalid",
                "boolean": True 
            })

        else:
            try:    
                sender_email = settings.SENDER_EMAIL
                rec_email = request.data['email']
                password = settings.SENDER_PASSWORD
                code = randint(100000, 999999)
                message = f'{code}'
                server = smtplib.SMTP('smtp.gmail.com', 587)
                server.starttls()
                server.login(sender_email, password)
                server.sendmail(sender_email, rec_email, message)
                return Response(
                    {'code': code}
                )
            except:
                return Response(status=status.HTTP_400_BAD_REQUEST)



class ForgotPassword(APIView):
    def post(self, request):
        email = request.data.get('email')
        if not email:
            return Response({"error": "Email is required."}, status=status.HTTP_400_BAD_REQUEST)

        user = User.objects.filter(email=email).first()
        if user:
            try:
                sender_email = settings.SENDER_EMAIL
                sender_password = settings.SENDER_PASSWORD
                code = randint(100000, 999999)
                rec_email = request.data['email']

                # Send email
                server = smtplib.SMTP('smtp.gmail.com', 587)
                server.starttls()
                server.login(sender_email, sender_password)
                message = f'{code}'
                server.sendmail(sender_email, rec_email, message)
                server.quit()


                return Response({"message": "Password reset code sent.", "boolean": True, "code": code}, status=status.HTTP_200_OK)
            except Exception as e:
                return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        else:
            return Response({"boolean": False, "error": "User with this email does not exist."}, status=status.HTTP_404_NOT_FOUND)


class ResetPassword(APIView):
    def post(self, request):
        email = request.data.get('email')
        new_password = request.data.get('password')
        
        user = User.objects.filter(email=email).first()
        if not user:
            return Response({"error": "User not found."}, status=status.HTTP_404_NOT_FOUND)

        try:
            user.set_password(new_password)
            user.save()
            return Response({"success": True, "message": "Password reset successful."}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            refresh = RefreshToken.for_user(user)
            return Response({
                'id': user.id,
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'user': {
                    'id': user.id,
                    'username': user.username,
                    'first_name': user.first_name,
                    'last_name': user.last_name,
                    'description': user.description,
                    'is_staff': user.is_staff,
                    'role': user.role,
                    'profile_photo': settings.DOMAIN + user.profile_photo.url if user.profile_photo else None,
                    'preferences': user.preferences
                }
            })
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LogoutView(APIView):
    def post(self, request):
        refresh_token = request.data.get("refresh_token")
        if not refresh_token:
            return Response({"error": "Refresh token is missing"}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)



class UserModelViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer






from rest_framework.permissions import IsAuthenticated

class AddCourseToMyCoursesAPIView(APIView):
    # permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        course_id = request.data.get('course_id')
        user_id = request.data.get('user_id')
        if not course_id:
            return Response({"error": "Course ID is required"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            course = Course.objects.get(id=course_id)
            user = User.objects.get(id=user_id)
            user.my_courses.add(course)
            return Response({"message": "Course added successfully"}, status=status.HTTP_200_OK)
        except Course.DoesNotExist:
            return Response({"error": "Course not found"}, status=status.HTTP_404_NOT_FOUND)

class MyCoursesView(APIView):
    # permission_classes = [IsAuthenticated]

    def post(self, request):
        user = User.objects.get(id=request.data.get("user_id"))  # Получаем текущего пользователя
        user_data = UserSerializer(user).data
        
        # Include full details of courses
        user_data['my_courses'] = CourseShortSerializer(user.my_courses.all(), many=True).data

        return Response(user_data)