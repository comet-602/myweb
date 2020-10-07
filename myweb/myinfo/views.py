from django.shortcuts import render
from django.http import HttpResponse
import json
import requests
from myweb import settings
from django.views.generic import View


def pagelist(request):
    temp={}
    if request.method == 'POST':
        if request.POST['showone']:
            temp['gotit'] = 1
    return render(request,'myinfo/myweb.html', temp)