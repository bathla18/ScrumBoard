from rest_framework import serializers
from .models import List, Card


class CardSerializers (serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = '__all__'


class ListSerializers (serializers.ModelSerializer):
    cards = CardSerializers(read_only=True,many=True)
    class Meta:
        model = List
        fields = '__all__'



