from django.urls import path
from . import views 


urlpatterns = [
    path('', views.pagelist, name='pagelist'),
    path('cpu_info', views.cpu_info, name='cpu_info'),
    path('disk', views.disk, name='disk'),
    path('net_ip', views.net_ip, name='net_ip'),
    path('sys', views.sys, name='sys'),
]