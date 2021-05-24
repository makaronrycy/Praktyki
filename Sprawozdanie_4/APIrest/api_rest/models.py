from django.db import models

# Create your models here.
class Guitar(models.Model):
    type = models.CharField(max_length=100)
    brand = models.CharField(max_length=100)
    series = models.CharField(max_length=200)
    body_type = models.CharField(max_length=100)
    average_price= models.FloatField(default=2000.00)

    
class Car(models.Model):
    type = models.CharField(max_length=100)
    brand = models.CharField(max_length=100)
    series = models.CharField(max_length=200)
    max_speed =models.IntegerField(default=100)
    average_price= models.FloatField(default=2000.00)

class Soda(models.Model):
    brand = models.CharField(max_length=100)
    type = models.CharField(max_length=200)
    average_price= models.FloatField(default=2000.00)

def __str__(self):
    return self.brand, self.series