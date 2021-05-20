from rest_framework import serializers
from .models import Guitar


class GuitarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guitar
        fields = ['id','type','brand','series','body_type','average_price']

