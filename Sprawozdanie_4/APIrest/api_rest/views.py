from .models import Guitar
from .serializers import GuitarSerializer
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

class GenericAPIView(generics.GenericAPIView,mixins.ListModelMixin,mixins.CreateModelMixin, mixins.UpdateModelMixin,mixins.RetrieveModelMixin,mixins.DestroyModelMixin):
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


