from django.urls import path
from .views import video_list

urlpatterns = [
    path('api/getvideos/',video_list, name='videolist'),
]
