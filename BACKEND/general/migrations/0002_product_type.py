# Generated by Django 5.0.3 on 2024-04-10 05:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('general', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='type',
            field=models.CharField(default='หมูกรอบ', max_length=50),
            preserve_default=False,
        ),
    ]
