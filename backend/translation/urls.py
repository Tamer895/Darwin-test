# urls.py
from django.urls import path
from .views import translations

urlpatterns = [
    path('<str:lang_code>/<str:ns>/', translations),
]
