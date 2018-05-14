from django.contrib.auth.models import User

from rest_framework import generics
from rest_framework.permissions import IsAdminUser

from .serializers import ToolListSerializer, ToolDetailSerializer
from tools.models import Tool

class ToolApiList(generics.ListAPIView):
    serializer_class = ToolListSerializer
    permission_classes = []
    authentication_classes = []

    def get_queryset(self):
      query = self.request.GET.get("q")
      if query:
          qs = Tool.objects.search(query)
      else:
          qs = Tool.objects.all()
      return qs



class ToolApiDetail(generics.RetrieveAPIView):
    queryset = Tool.objects.all()
    serializer_class = ToolDetailSerializer
    permission_classes = []
    authentication_classes = []
