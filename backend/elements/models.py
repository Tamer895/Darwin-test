from django.db import models

# Create your models here.
class Video(models.Model):
    title = models.CharField(max_length=200)
    video = models.FileField(upload_to="videos/")

    def __str__(self):
        return self.title
    

class Text(models.Model):
    title = models.CharField(max_length=200)
    text = models.CharField(max_length=1000)

    def __str__(self):
        return self.title