from django.db import models

class Product(models.Model):
    id = models.TextField(max_length=500,primary_key=True)
    name = models.TextField(max_length=500)
    company = models.TextField(max_length=500)
    price = models.BigIntegerField()
    image = models.TextField(max_length=500)
    description = models.TextField(max_length=500)
    category = models.TextField(max_length=500)
    featured=models.BooleanField(default=True)

    def __str__(self):
        return self.name