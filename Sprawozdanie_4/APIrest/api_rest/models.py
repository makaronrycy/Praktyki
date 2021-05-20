from django.db import models

# Create your models here.
class Guitar(models.Model):
    type = models.CharField(max_length=100)
    brand = models.CharField(max_length=100)
    series = models.CharField(max_length=200)
    body_type = models.CharField(max_length=100)
    average_price= models.FloatField(default=2000.00)

    def __str__(self):
        return self.brand, self.series
