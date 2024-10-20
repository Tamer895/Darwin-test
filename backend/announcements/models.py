from django.db import models

# Create your models here.
class Announcement(models.Model):
    title = models.CharField(verbose_name="Title", max_length=250)
    description = models.CharField(verbose_name="Description", max_length=1000)

    category = models.JSONField(default=list, null=True, blank=True)
    preview = models.ImageField(verbose_name="Preview", upload_to="announcements/previews/", blank=True, null=True)
    video = models.FileField(verbose_name="Video", upload_to="announcements/videos/", blank=True, null=True)

    link = models.CharField(verbose_name="Link", max_length=250)

    created_at = models.DateTimeField(verbose_name="Created at", auto_now_add=True)
    term = models.DateField(verbose_name="Term")