# Generated by Django 3.2.3 on 2021-05-20 08:37

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Guitar',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('brand_text', models.CharField(max_length=100)),
                ('series_text', models.CharField(max_length=200)),
                ('bodyType_text', models.CharField(max_length=100)),
                ('averagePrice_float', models.FloatField(max_length=20)),
            ],
        ),
    ]