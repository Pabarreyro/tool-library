from rest_framework import serializers

from tools.models import Tool


class ToolListSerializer(serializers.ModelSerializer):
  class Meta:
    model = Tool
    fields = ['pk', 'title', 'imgUrl', 'createDate', 'brand', 'dueDate', 'status', 'late_fine', 'active', 'featured',
              'description'];


class ToolDetailSerializer(serializers.ModelSerializer):
  class Meta:
    model = Tool
    fields = ['pk', 'title', 'imgUrl', 'createDate', 'brand', 'dueDate', 'status', 'late_fine', 'active', 'featured',
              'description'];
