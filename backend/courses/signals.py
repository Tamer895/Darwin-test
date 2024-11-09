from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Course
from users.models import User

@receiver(post_save, sender=User)
def reindex_courses_on_author_update(sender, instance, **kwargs):
    # Получаем все курсы, связанные с данным пользователем
    courses = Course.objects.filter(author=instance)
    for course in courses:
        # Переиндексация курса
        course.save()  # save() вызовет Algolia для переиндексации
