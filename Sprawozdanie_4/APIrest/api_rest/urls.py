from django.urls import path
from .views import guitar_detail, guitar_list,GuitarAPIView,GuitarDetails
urlpatterns = [
    #path('guitar/', guitar_list),
    path('guitar/',GuitarAPIView.as_view()),
    path('detail/<int:pk>/',GuitarDetails.as_view())
]
