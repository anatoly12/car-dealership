from django.db import models

# Create your models here.

from django.db import models

class CarMake(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=300)

    def __str__(self):
        return self.name

class CarModel(models.Model):
    SEDAN = 'Sedan'
    SUV = 'SUV'
    WAGON = 'Wagon'
    CAR_TYPE_CHOICES = [
        (SEDAN, 'Sedan'),
        (SUV, 'SUV'),
        (WAGON, 'Wagon'),
    ]
    car_make = models.ForeignKey(CarMake, on_delete=models.CASCADE)
    dealer_id = models.IntegerField()  # This matches Cloudant/Mongo dealer id
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=20, choices=CAR_TYPE_CHOICES)
    year = models.DateField()

    def __str__(self):
        return f"{self.name} ({self.type}, {self.year})"
