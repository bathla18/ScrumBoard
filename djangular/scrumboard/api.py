from rest_framework.viewsets import ModelViewSet
from .models import List, Card
from .serializers import ListSerializers, CardSerializers


class ListViewSet(ModelViewSet):
    queryset = List.objects.all()
    serializer_class = ListSerializers


class CardViewSet(ModelViewSet):
    queryset = Card.objects.all()
    serializer_class = CardSerializers
