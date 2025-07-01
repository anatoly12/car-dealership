from django.contrib import admin
from django.urls import path, include  # ← you forgot to import include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/accounts/', include('accounts.urls')),  # now this will work
]
