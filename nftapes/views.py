from django.shortcuts import render

def index(request):
    return render(request, "index.html")

def index_en(request):
    return render(request, "index-en.html")