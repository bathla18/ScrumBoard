from django.db import models


# Create your models here.
# List Model
class List(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return "List: {}".format(self.name)


# Card Model
class Card(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    list = models.ForeignKey(List, related_name="cards")
    story_points = models.IntegerField(null=True, blank=True)
    business_values = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return "Card: {}".format(self.title)
