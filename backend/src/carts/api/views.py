from rest_framework import generics

from accounts.api.permissions import IsOwnerOrReadOnly
from carts.models import Cart
from .serializers import CartSerializer


class CartAPIDetailView(generics.RetrieveAPIView):
  queryset = Cart.objects.all()
  serializer_class = CartSerializer


class CartAPIUpdateView(generics.UpdateAPIView):
  queryset = Cart.objects.all()
  serializer_class = CartSerializer
  permission_classes = [IsOwnerOrReadOnly]

  def perform_update(self, serializer):
    serializer.save(user=self.request.user)


class CartAPICreateView(generics.CreateAPIView):
  queryset = Cart.objects.all()
  serializer_class = CartSerializer

  def perform_create(self, serializer):
    serializer.save(user=self.request.user)
