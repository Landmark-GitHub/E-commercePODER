from django.db import models

class Product(models.Model):    
    name = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField(null=True)
    type = models.CharField(max_length=50)
    brand = models.CharField(max_length=50)
    quantity = models.IntegerField(null=True)
    sday = models.DateField(null=True)
    lday = models.DateField(null=True)
    img = models.URLField(null=True)

    def __str__(self):
        return self.name + " = " + self.type

class Stock(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='stork')
    size = models.CharField(max_length=10)
    quantity = models.IntegerField(null=True)

    def __str__(self):
        return f"{self.product.name} - {self.size}"
