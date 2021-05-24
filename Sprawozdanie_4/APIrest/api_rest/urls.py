from django.urls import path,include
from .views import GuitarGenericAPIView,GuitarViewSet,SodaGenericAPIView,SodaViewSet,CarGenericAPIView,CarViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('guitar',GuitarViewSet, basename='guitar')
router.register('soda',SodaViewSet, basename='soda')
router.register('car',CarViewSet, basename='car')


urlpatterns = [
    path('generic/guitar/<int:id>/',GuitarGenericAPIView.as_view()),
    path('generic/soda/<int:id>/',SodaGenericAPIView.as_view()),
    path('generic/car/<int:id>/',CarGenericAPIView.as_view()),
    path('/<int:id>/', include(router.urls)),
    path('', include(router.urls))
]
