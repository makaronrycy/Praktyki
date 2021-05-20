from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from rest_framework import serializers
import rest_framework
from rest_framework.parsers import JSONParser
from .models import Guitar
from .serializers import GuitarSerializer
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView

# Create your views here.

class GuitarAPIView(APIView):

    def get(self,request):
            guitars = Guitar.objects.all()
            serializer = GuitarSerializer(guitars,many=True)
            return Response(serializer.data)
    def post(self,request):
            serializer = GuitarSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data,status=status.HTTP_201_CREATED)
            return Response(serializer.errors,status = status.HTTP_400_BAD_REQUEST)
class GuitarDetails(APIView):
    def get_object(self,pk):
        try:
            return Guitar.objects.get(pk=pk)

        except Guitar.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
    def get(self,request,pk):
        guitar = self.get_object(pk)
        serializer = GuitarSerializer(guitar)
        return Response(serializer.data)
    def put(self,request,pk):
        guitar = self.get_object(pk)
        serializer = GuitarSerializer(guitar, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,status = status.HTTP_400_BAD_REQUEST)
    def delete(self,request,pk):
        guitar = self.get_object(pk)
        guitar.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



@api_view(['GET','POST'])
def guitar_list(request):
    if request.method == "GET":
        guitars = Guitar.objects.all()
        serializer = GuitarSerializer(guitars,many=True)
        return Response(serializer.data)
    elif request.method == "POST":
        serializer = GuitarSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status = status.HTTP_400_BAD_REQUEST)
@api_view(['GET','PUT','DELETE'])
def guitar_detail(request,pk):
    try:
        guitar = Guitar.objects.get(pk=pk)

    except Guitar.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = GuitarSerializer(guitar)
        return Response(serializer.data)

    elif request.method =='PUT':
        serializer = GuitarSerializer(guitar, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,status = status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE': 
        guitar.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
