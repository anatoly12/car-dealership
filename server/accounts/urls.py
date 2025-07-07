from django.urls import path
from . import views

urlpatterns = [
    path("register/", views.register_view),
     path('login/', views.login_user, name='login'),
    path("logout/", views.logout_view),
     path('get_cars', views.get_cars, name='get_cars'),
]
