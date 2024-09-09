from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from general.models import Product
from django.core.exceptions import ObjectDoesNotExist
import json

# Create your views here.
@csrf_exempt
def ecommerce_index_view(request, id=None):
    if request.method == 'GET':
        # Retrieve all products
        if id is None:
            products = Product.objects.all()
            products_dict = {}
            for product in products:
                product_data = {
                    'id': str(product.id),
                    'name': str(product.name),
                    'description': product.description,
                    'price': str(product.price),
                    'quantity': product.quantity,
                    'image_url': product.image.url if product.image else None,
                    'start_preorder_date': product.start_preorder_date.isoformat(),
                    'end_preorder_date': product.end_preorder_date.isoformat(),
                    'status': product.status,
                }
                products_dict = product_data
            return JsonResponse(products_dict)

        # Retrieve a specific product by ID
        else:
            try:
                product = Product.objects.get(sku=id)
                product_data = {
                    'sku': str(product.sku),
                    'name': str(product.name),
                    'description': product.description,
                    'price': str(product.price),
                    'quantity': product.quantity,
                    'image_url': product.image.url if product.image else None,
                    'start_preorder_date': product.start_preorder_date.isoformat(),
                    'end_preorder_date': product.end_preorder_date.isoformat(),
                    'status': product.status,
                }
                return JsonResponse(product_data)
            except ObjectDoesNotExist:
                return JsonResponse({'error': 'Product not found'}, status=404)
            except ValueError:
                return JsonResponse({'error': 'Invalid product ID'}, status=400)