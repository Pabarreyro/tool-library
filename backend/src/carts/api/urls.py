from django.conf.urls import url


from .views import CartAPIDetailView, CartAPIUpdateView, CartAPICreateView

urlpatterns = [
  url(r'^(?P<pk>[0-9]+)/detail/$', CartAPIDetailView.as_view()),
  url(r'^(?P<pk>[0-9]+)/update/$', CartAPIUpdateView.as_view()),
  url(r'^create/$', CartAPICreateView.as_view()),

]
