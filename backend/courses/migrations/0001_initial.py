# Generated by Django 5.0.6 on 2024-09-29 14:35

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name='Name')),
                ('description', models.CharField(max_length=1000, verbose_name='Description')),
                ('language', models.CharField(max_length=50, verbose_name='Language')),
                ('is_finished', models.BooleanField(default=False, verbose_name='Is finished')),
                ('is_private', models.BooleanField(default=False, verbose_name='Is private')),
                ('category', models.JSONField(blank=True, default=list, null=True)),
                ('rating', models.FloatField(default=0, verbose_name='Rating')),
                ('level', models.CharField(max_length=50, verbose_name='Level')),
                ('intro_video', models.FileField(blank=True, null=True, upload_to='intro_videos/', verbose_name='Intro video')),
                ('preview', models.ImageField(blank=True, null=True, upload_to='previews/', verbose_name='Preview')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Created at')),
                ('updated_at', models.DateTimeField(auto_now_add=True, verbose_name='Updated at')),
            ],
        ),
        migrations.CreateModel(
            name='Lesson',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100, verbose_name='Title')),
                ('description', models.CharField(max_length=1000, verbose_name='Description')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Created at')),
                ('updated_at', models.DateTimeField(auto_now_add=True, verbose_name='Updated at')),
            ],
        ),
    ]
