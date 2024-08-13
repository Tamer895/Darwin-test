from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import *
from .serializers import *
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

from random import randint





# Create your views here.
class GetCode(APIView):
    def post(self, request):

        email = request.data.get('email')

        if User.objects.filter(email=email).exists():
            return Response({
                "message": "User with this email already exists",
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
        