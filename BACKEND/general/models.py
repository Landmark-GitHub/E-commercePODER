from django.db import models

class Product(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=50)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.IntegerField()
    image = models.ImageField(upload_to='product_images/', blank=True, null=True)
    start_preorder_date = models.DateTimeField()
    end_preorder_date = models.DateTimeField()
    status = models.BooleanField()
    def __str__(self):
        return self.name + '_' + str(self.quantity)
    
class Customer(models.Model):
    customer_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone_number = models.CharField(max_length=15)
    address = models.TextField()

class Order(models.Model):
    order_id = models.AutoField(primary_key=True)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    order_date = models.DateField()
    order_status_choices = [
        ('WAITING_PAYMENT', 'Waiting for payment'),
        ('PAID', 'Paid'),
        ('SHIPPED', 'Shipped'),
    ]
    order_status = models.CharField(max_length=20, choices=order_status_choices)

class Payment(models.Model):
    payment_id = models.AutoField(primary_key=True)
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    payment_method = models.CharField(max_length=50)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    payment_date = models.DateField()

class Shipping(models.Model):
    shipping_id = models.AutoField(primary_key=True)
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    recipient_name = models.CharField(max_length=100)
    shipping_address = models.TextField()
    recipient_phone_number = models.CharField(max_length=15)
    courier_company = models.CharField(max_length=100)
    tracking_number = models.CharField(max_length=50)
    shipping_date = models.DateField()