from django.urls import path
from . import views

urlpatterns = [
    path("register/", views.register_view),
    path('login/', views.login_user, name='login'),
    path("logout/", views.logout_view),
    path('get_cars', views.get_cars, name ='getcars'),
    path('get_dealers', views.get_dealerships, name='get_dealers'),
    path('get_dealers/<str:state>', views.get_dealerships, name='get_dealers_by_state'),
    path('dealer/<int:dealer_id>', views.get_dealer_details, name='dealer_details'),
    path('reviews/dealer/<int:dealer_id>', views.get_dealer_reviews, name='dealer_details'),
    path('add_review', views.add_review, name='add_review'),
]