from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UserProfileSerializer
from .models import Videogallery

@api_view(['GET'])
def video_list(request):
    profiles = Videogallery.objects.all()
    serializer = UserProfileSerializer(profiles, many=True)
    return Response(serializer.data)
