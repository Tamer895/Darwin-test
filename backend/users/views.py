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
                sender_email = "ahantamer@gmail.com"
                rec_email = request.data['email']
                password = 'xdst losn hpas aroh'
                code = randint(100000, 999999)
                message = f'{code}'
                server = smtplib.SMTP('smtp.gmail.com', 587)
                server.starttls()
                server.login(sender_email, password)
                print('login successful')
                server.sendmail(sender_email, rec_email, message)
                print(request.data['email'])
                return Response(
                    {'code': code}
                )
            except:
                return Response(status=status.HTTP_400_BAD_REQUEST)


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
            })
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LogoutView(APIView):
    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        