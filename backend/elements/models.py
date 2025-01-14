from django.db import models

# Create your models here.
class Video(models.Model):
    title = models.CharField(max_length=200)
    video = models.FileField(upload_to="videos/")
    order = models.PositiveIntegerField(default=0) 

    def __str__(self):
        return self.title
    

class Text(models.Model):
    title = models.CharField(max_length=200)
    text = models.TextField()
    order = models.PositiveIntegerField(default=0) 

    def __str__(self):
        return self.title
    

class Image(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to="images/")
    order = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.title