from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
import json
import requests
from myweb import settings
from django.views.generic import View

# import wmi
# import win32com
# import pythoncom

def pagelist(request):
    temp={}
    if request.method == 'POST':
        if request.POST['showone']:
            temp['gotit'] = 1
    return render(request,'myinfo/myweb.html', temp)


def cpu_info(request):
    pythoncom.CoInitialize ()
    cpu_data = {}
    s=wmi.WMI()
    cpu_list = s.Win32_Processor()
    cpu_data['num'] = len(cpu_list)
    print('cpu數量',len(cpu_list))
    for cpu in cpu_list:
        cpu_data['core_num'] = cpu.NumberOfCores
        cpu_data['core_no'] = cpu.Name.strip()
        print("cpu核心數",cpu.NumberOfCores)
        print("cpu型號",cpu.Name.strip())
    print('~~~~~~~',cpu_data)
    pythoncom.CoUninitialize ()
    return JsonResponse(cpu_data)


def disk(request):
    pythoncom.CoInitialize ()
    disk_data = {}
    w = wmi.WMI()
    disk = w.Win32_DiskDrive()[0]
    disk_data['Manufacturer'] = disk.Manufacturer
    disk_data['Model'] = disk.Model
    disk_data['SerialNumber'] = disk.SerialNumber
    disk_data['Size'] = int(disk.Size) / (1024 * 1024 * 1024)
    print(disk_data)
    # print("硬盤制造商Manufacturer",disk.Manufacturer)
    # print("硬盤型號", disk.Model)
    # print("硬盤sn", disk.SerialNumber)
    # print("硬盤大小", int(disk.Size) / (1024 * 1024 * 1024))
    pythoncom.CoUninitialize ()
    return JsonResponse(disk_data)

def net_ip(request):
    pythoncom.CoInitialize ()
    w = wmi.WMI()
    net_ip_data = {}
    count = 0
    for nic in w.Win32_NetworkAdapterConfiguration():
        if nic.IPAddress != None:
            net_ip_data['ip'] = nic.IPAddress[0]
    print(net_ip_data)
    pythoncom.CoUninitialize ()
    return JsonResponse(net_ip_data)


def sys(request):
    pythoncom.CoInitialize ()
    c=wmi.WMI()
    sys_data={}
    for sys in c.Win32_OperatingSystem():
        sys_data['sys_name'] = sys.Caption
        sys_data['sys_ver'] = sys.OSArchitecture
    print(sys_data)
    pythoncom.CoUninitialize ()
    return JsonResponse(sys_data)
