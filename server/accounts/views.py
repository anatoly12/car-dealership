from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def register_view(request):
    if request.method == "POST":
        data = json.loads(request.body)
        username = data.get("name")
        email = data.get("email")
        password = data.get("password")
        if User.objects.filter(username=username).exists():
            return JsonResponse({"error": "Username already exists"}, status=400)
        user = User.objects.create_user(username=username, email=email, password=password)
        return JsonResponse({"message": "User registered successfully"})

@csrf_exempt
def login_view(request):
    if request.method == "POST":
        data = json.loads(request.body)
        email = data.get("email")
        password = data.get("password")
        try:
            username = User.objects.get(email=email).username
        except User.DoesNotExist:
            return JsonResponse({"error": "Invalid email or password"}, status=400)
        user = authenticate(username=username, password=password)
        if user:
            login(request, user)
            return JsonResponse({"message": "Login successful"})
        return JsonResponse({"error": "Invalid credentials"}, status=400)

@csrf_exempt
def logout_view(request):
    logout(request)
    return JsonResponse({"message": "Logged out successfully"})
