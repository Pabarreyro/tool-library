"""toollibrary URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from django.conf.urls.static import static
from django.conf import settings
from rest_framework.documentation import include_docs_urls

urlpatterns = [
  url(r'^', include_docs_urls(title='Tool Library API Documentation')),
  url(r'^admin/', admin.site.urls),
  url(r'^api/tools/', include('tools.api.urls')),
  url(r'^api/auth/', include('accounts.api.urls', namespace='api-auth')),
  url(r'^api/user/', include('accounts.api.user.urls', namespace='api-user')),
  url(r'^api/carts/', include('carts.api.urls', namespace='api-cart')),
]

if settings.DEBUG:
  urlpatterns = urlpatterns + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
  urlpatterns = urlpatterns + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
