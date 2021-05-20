from django.urls import path,include
from .views import GenericAPIView,GuitarViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('guitar',GuitarViewSet, basename='guitar')

urlpatterns = [
    path('generic/guitar/<int:id>/',GenericAPIView.as_view()),
    path('viewset/<int:id>/', include(router.urls)),
    path('', include(router.urls))
]
