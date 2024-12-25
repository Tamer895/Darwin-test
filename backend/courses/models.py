from django.db import models
from categories.models import Category
from elements.models import *




class Lesson(models.Model):

    # Basic datas
    title = models.CharField(verbose_name="Title", max_length=100, default="")
    description = models.CharField(verbose_name="Description", max_length=1500, default="")

    course = models.ForeignKey('courses.Course', related_name="lessons", on_delete=models.CASCADE)

    # Structure 
    videos = models.ManyToManyField(Video, blank=True)
    images = models.ManyToManyField(Image, blank=True)
    # audios = models.ManyToManyField(Audio, blank=True)
    # PDFs = models.ManyToManyField(PDF, blank=True)
    text = models.ManyToManyField(Text, blank=True)


    created_at = models.DateTimeField(verbose_name="Created at", auto_now_add=True)
    updated_at = models.DateTimeField(verbose_name="Updated at", auto_now_add=True)

    is_active = models.BooleanField(default=False)



class Course(models.Model):

    # Basic datas
    name = models.CharField(verbose_name="Name", max_length=255)
    description = models.TextField(verbose_name="Description")
    author = models.ForeignKey('users.User', on_delete=models.CASCADE, related_name="courses")
    language = models.CharField(verbose_name="Language", max_length=50)
    is_finished = models.BooleanField(verbose_name="Is finished", default=False)
    is_private = models.BooleanField(verbose_name="Is private", default=False)


    category = models.JSONField(default=list, null=True, blank=True)
    rating = models.FloatField(verbose_name="Rating", default=0)
    level = models.CharField(verbose_name="Level", max_length=50)


    # reviews = models.ManyToManyField(Review, blank=True)
    intro_video = models.FileField(verbose_name="Intro video", upload_to="intro_videos/", blank=True, null=True)
    # students 
    preview = models.ImageField(verbose_name="Preview", upload_to="previews/", blank=True, null=True)

    # lessons = models.ManyToManyField('courses.Lesson', null=True, blank=True, related_name="lessons")


    # 
    # 
    # Characteristcs
    



    created_at = models.DateTimeField(verbose_name="Created at", auto_now_add=True)
    updated_at = models.DateTimeField(verbose_name="Updated at", auto_now_add=True)

    @property
    def author_data(self):
        return {
            "username": self.author.username,
            "profile_photo": self.author.profile_photo,
            "first_name": self.author.first_name,
            "last_name": self.author.last_name,
        }


