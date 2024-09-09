from django.shortcuts import get_object_or_404, render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from general.models import Product, Stock
from .models import Product

def addproduct(request):
    # Query for unique types and brands from existing products
    product_types = set(Product.objects.values_list('type', flat=True))
    product_brands = set(Product.objects.values_list('brand', flat=True))

    # if request.method == 'POST':
    #     form = ProductForm(request.POST, request.FILES)
    #     if form.is_valid():
    #         product = form.save()

    #         # Save stock data
    #         stock_data = []
    #         for i in range(int(request.POST.get('stock_count', 0))):
    #             size = request.POST.get(f'stock-size-{i}')
    #             quantity = request.POST.get(f'stock-quantity-{i}')
    #             if size and quantity:
    #                 stock = Stock(product=product, size=size, quantity=int(quantity))
    #                 stock.save()
    #                 stock_data.append({
    #                     'size': size,
    #                     'quantity': quantity
    #                 })

    #         product.stock_data = stock_data
    #         product.save()
    #         return redirect('product_detail', pk=product.pk)
    # else:
    #     form = ProductForm()

    context = {
        'product_types': product_types,
        'product_brands': product_brands,
    }
    return render(request, 'addproduct.html', context)

def ecommerce_index_view(request, id=None):
    if request.method == 'GET':
        if id is not None:
            product = get_object_or_404(Product, pk=id)
            stock_data = []
            for stock in product.stork.all():
                stock_data.append({
                    'size': stock.size,
                    'quantity': stock.quantity
                })
            product_data = {
                'id': product.id,
                'name': product.name,
                'price': str(product.price),
                'description': product.description,
                'type': product.type,
                'brand': product.brand,
                'quantity': product.quantity,
                'sday': str(product.sday),
                'lday': str(product.lday),
                'img': product.img,
                'stock': stock_data
            }
            return JsonResponse(product_data)
        else:
            products = Product.objects.all()
            data = []
            for product in products:
                stock_data = []
                for stock in product.stork.all():
                    stock_data.append({
                        'size': stock.size,
                        'quantity': stock.quantity
                    })
                product_data = {
                    'id': product.id,
                    'name': product.name,
                    'price': str(product.price),
                    'description': product.description,
                    'type': product.type,
                    'brand': product.brand,
                    'quantity': product.quantity,
                    'sday': str(product.sday),
                    'lday': str(product.lday),
                    'img': product.img,
                    'stock': stock_data
                }
                data.append(product_data)
            return JsonResponse(data, safe=False)
        
        
def dashboard(request):
    context = {}
    # Render the dashboard template with the context data
    return render(request, 'dashboard.html', context)


