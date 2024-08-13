from django.db import models
from django.contrib.auth.models import AbstractUser
from categories.models import Category

# Create your models here.
class User(AbstractUser):
    # AbstractUser datas...


    # Basic personal datas
    birth_date = models.DateField(verbose_name="Birth Date", auto_now_add=True)
    description = models.CharField(verbose_name="Description", max_length=1000, blank=True, null=True)
    role = models.CharField(verbose_name="Role", max_length=50)
    is_verificated = models.BooleanField(default=False)
    preferences = models.JSONField(default=list, null=True, blank=True)


    # Custom datas
    # profile_photo = models.ImageField(verbose_name="Profile photo", upload_to="profile_photos/")
    # active_courses = models.ManyToManyField(Course, blank=True)
    # finished_courses = models.ManyToManyField(Course, blank=True
    # saved_courses = models.ManyToManyField(Course, blank=True)
    # certificates = models.ManyToManyField(Certificate, blank=True)


    def __str__(self):
        return self.username