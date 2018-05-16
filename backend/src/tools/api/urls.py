from django.conf.urls import url

from .views import ToolApiList, ToolApiDetail

urlpatterns = [
  url(r'^(?P<pk>[0-9]+)/$', ToolApiDetail.as_view()),
  url(r'^$', ToolApiList.as_view()),

]
