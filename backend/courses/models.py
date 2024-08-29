from django.db import models
from categories.models import Category
from users.models import User
from elements.models import *




class Lesson(models.Model):

    # Basic datas
    title = models.CharField(verbose_name="Title", max_length=100)
    description = models.CharField(verbose_name="Description", max_length=1000)


    # Structure 
    videos = models.ManyToManyField(Video, blank=True)
    # images = models.ManyToManyField(Image, blank=True)
    # audios = models.ManyToManyField(Audio, blank=True)
    # PDFs = models.ManyToManyField(PDF, blank=True)
    text = models.ManyToManyField(Text, blank=True)


    created_at = models.DateTimeField(verbose_name="Created at", auto_now_add=True)
    updated_at = models.DateTimeField(verbose_name="Updated at", auto_now_add=True)



class Course(models.Model):

    # Basic datas
    name = models.CharField(verbose_name="Name", max_length=255)
    description = models.CharField(verbose_name="Description", max_length=1000)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    language = models.CharField(verbose_name="Language", max_length=50)
    is_finished = models.BooleanField(verbose_name="Is finished", default=False)
    is_private = models.BooleanField(verbose_name="Is private", default=False)


    category = models.ManyToManyField(Category, blank=True)
    rating = models.FloatField(verbose_name="Rating", null=True, blank=True)
    level = models.CharField(verbose_name="Level", max_length=50)

    # reviews = models.ManyToManyField(Review, blank=True)
    intro_video = models.FileField(verbose_name="Intro video", upload_to="intro_videos/", blank=True, null=True)
    # students 
    preview = models.ImageField(verbose_name="Preview", upload_to="previews/", blank=True, null=True)


    created_at = models.DateTimeField(verbose_name="Created at", auto_now_add=True)
    updated_at = models.DateTimeField(verbose_name="Updated at", auto_now_add=True)


