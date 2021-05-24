from rest_framework import serializers
from .models import Guitar,Car,Soda


class GuitarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guitar
        fields = ['id','type','brand','series','body_type','average_price']
class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = ['id','type','brand','series','max_speed','average_price']
class SodaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Soda
        fields = ['id','type','brand','average_price']
        

