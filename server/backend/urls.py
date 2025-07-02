from django.contrib import admin
from django.urls import path, include  # ← you forgot to import include
from accounts.views import FrontendAppView
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, re_path
import os
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('accounts.urls')),  # now this will work
    path('', FrontendAppView.as_view(), name='index.html'),

]

urlpatterns += static('/', document_root=os.path.join(settings.BASE_DIR, 'frontend', 'dist'))
urlpatterns += static('/assets/', document_root=os.path.join(settings.BASE_DIR, 'frontend', 'dist', 'assets'))

urlpatterns += [
    re_path(r'^.*$', TemplateView.as_view(template_name='index.html')),
]