from django.db import models

# Create your models here.

class Videogallery(models.Model):

    thumbnail_url = models.TextField()
    video_url = models.TextField()
    refid = models.CharField(max_length=300)