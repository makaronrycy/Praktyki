# Generated by Django 3.2.3 on 2021-05-20 09:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_rest', '0002_auto_20210520_1150'),
    ]

    operations = [
        migrations.AlterField(
            model_name='guitar',
            name='average_price',
            field=models.FloatField(default=2000.0),
        ),
    ]
