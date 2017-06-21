from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions

from .models import List, Card
from .serializers import ListSerializers, CardSerializers


class ListViewSet(ModelViewSet):
    queryset = List.objects.all()
    serializer_class = ListSerializers
    permission_classes = (permissions.IsAuthenticated,)


class CardViewSet(ModelViewSet):
    queryset = Card.objects.all()
    serializer_class = CardSerializers
    permission_classes = (permissions.IsAuthenticated,)
