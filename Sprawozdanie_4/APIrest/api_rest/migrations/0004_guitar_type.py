# Generated by Django 3.2.3 on 2021-05-20 11:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_rest', '0003_alter_guitar_average_price'),
    ]

    operations = [
        migrations.AddField(
            model_name='guitar',
            name='type',
            field=models.CharField(default='electric', max_length=100),
            preserve_default=False,
        ),
    ]