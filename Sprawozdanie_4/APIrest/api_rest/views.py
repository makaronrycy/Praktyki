from .models import Guitar,Car,Soda
from .serializers import GuitarSerializer,SodaSerializer,CarSerializer
from rest_framework import generics
from rest_framework import mixins
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets

# Create your views here.

class GuitarViewSet(viewsets.ModelViewSet):
    serializer_class = GuitarSerializer
    queryset = Guitar.objects.all()
    authentication_classes = [BasicAuthentication]

class GuitarGenericAPIView(generics.GenericAPIView,mixins.ListModelMixin,mixins.CreateModelMixin, mixins.UpdateModelMixin,mixins.RetrieveModelMixin,mixins.DestroyModelMixin):
    serializer_class = GuitarSerializer
    queryset = Guitar.objects.all()
    authentication_classes = [BasicAuthentication]

    lookup_field = 'id'

    def get(self, request, id = None):
        if id:
            return self.retrieve(request)
        else:
            return self.list(request)

    def post(self,request):
        return self.create(request)

    def put(self,request, id=None):
        return self.update(request,id)

    def delete(self,request, id):
        return self.destroy(request,id)

        
class CarViewSet(viewsets.ModelViewSet):
    serializer_class = CarSerializer
    queryset = Car.objects.all()
    authentication_classes = [BasicAuthentication]

class CarGenericAPIView(generics.GenericAPIView,mixins.ListModelMixin,mixins.CreateModelMixin, mixins.UpdateModelMixin,mixins.RetrieveModelMixin,mixins.DestroyModelMixin):
    serializer_class = CarSerializer
    queryset = Car.objects.all()
    authentication_classes = [BasicAuthentication]

    lookup_field = 'id'

    def get(self, request, id = None):
        if id:
            return self.retrieve(request)
        else:
            return self.list(request)

    def post(self,request):
        return self.create(request)

    def put(self,request, id=None):
        return self.update(request,id)

    def delete(self,request, id):
        return self.destroy(request,id)

class SodaViewSet(viewsets.ModelViewSet):
    serializer_class = SodaSerializer
    queryset = Soda.objects.all()
    authentication_classes = [BasicAuthentication]

class SodaGenericAPIView(generics.GenericAPIView,mixins.ListModelMixin,mixins.CreateModelMixin, mixins.UpdateModelMixin,mixins.RetrieveModelMixin,mixins.DestroyModelMixin):
    serializer_class = SodaSerializer
    queryset = Soda.objects.all()
    authentication_classes = [BasicAuthentication]

    lookup_field = 'id'

    def get(self, request, id = None):
        if id:
            return self.retrieve(request)
        else:
            return self.list(request)

    def post(self,request):
        return self.create(request)

    def put(self,request, id=None):
        return self.update(request,id)

    def delete(self,request, id):
        return self.destroy(request,id)