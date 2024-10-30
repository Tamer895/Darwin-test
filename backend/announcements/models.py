from django.db import models

# Create your models here.
class Announcement(models.Model):
    title = models.CharField(verbose_name="Title", max_length=250)
    description = models.TextField(verbose_name="Description")

    source_name = models.CharField(verbose_name="Source name", max_length=100, null=True, blank=True)
    source_avatar = models.ImageField(verbose_name="Source Avatar", upload_to="announcements/source_avatar/", blank=True, null=True)

    category = models.JSONField(default=list, null=True, blank=True)
    preview = models.ImageField(verbose_name="Preview", upload_to="announcements/previews/", blank=True, null=True)
    video = models.FileField(verbose_name="Video", upload_to="announcements/videos/", blank=True, null=True)

    link = models.CharField(verbose_name="Link", max_length=250)

    created_at = models.DateTimeField(verbose_name="Created at", auto_now_add=True)



class Category(models.Model):
    name = models.CharField(verbose_name="Name", max_length=100)

    def __str__(self):
        return self.name