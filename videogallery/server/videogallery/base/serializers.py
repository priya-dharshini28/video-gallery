from rest_framework import serializers
from .models import Videogallery

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Videogallery
        fields = ['thumbnail_url', 'video_url','refid']
