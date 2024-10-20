# Generated by Django 5.0.6 on 2024-10-20 16:29

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Announcement',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=250, verbose_name='Title')),
                ('description', models.CharField(max_length=1000, verbose_name='Description')),
                ('category', models.JSONField(blank=True, default=list, null=True)),
                ('preview', models.ImageField(blank=True, null=True, upload_to='announcements/previews/', verbose_name='Preview')),
                ('video', models.FileField(blank=True, null=True, upload_to='announcements/videos/', verbose_name='Video')),
                ('link', models.CharField(max_length=250, verbose_name='Link')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Created at')),
                ('term', models.DateField(verbose_name='Term')),
            ],
        ),
    ]