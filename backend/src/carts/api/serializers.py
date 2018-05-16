from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated

from rest_framework import serializers
from carts.models import Cart

class CartSerializer(serializers.ModelSerializer):
  authentication_classes = (SessionAuthentication)
  permission_classes = (IsAuthenticated)

  class Meta:
    model = Cart
    fields = ['pk',
              'user',
              'tools',
              'created',
              'updated',
              'fine_total']
    read_only_fields = ('pk', 'user')
