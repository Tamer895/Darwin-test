# Generated by Django 5.0.6 on 2024-11-23 08:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_alter_user_profile_photo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='profile_photo',
            field=models.ImageField(blank=True, null=True, upload_to='profile_photos/', verbose_name='Profile photo'),
        ),
    ]
