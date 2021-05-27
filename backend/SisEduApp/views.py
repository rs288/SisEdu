from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from SisEduApp.models import Califica,Grupo,Tarea,Alumno
from SisEduApp.serializers import CalificaSerializer,GrupoSerializer,TareaSerializer,AlumnoSerializer


# Create your views here.
@csrf_exempt
def calificaApi(request,id=0):
    if request.method=='GET':
        califica = Califica.objects.all()
        califica_serializer = CalificaSerializer(califica, many=True)
        return JsonResponse(califica_serializer.data, safe=False)

    elif request.method=='POST':
        califica_data=JSONParser().parse(request)
        califica_serializer = CalificaSerializer(data=califica_data)
        if califica_serializer.is_valid():
            califica_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        califica_data = JSONParser().parse(request)
        califica=Califica.objects.get(CalificaId=califica_data['CalificaId'])
        califica_serializer=CalificaSerializer(califica,data=califica_data)
        if califica_serializer.is_valid():
            califica_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        califica=Califica.objects.get(CalificaId=id)
        califica.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)



@csrf_exempt
def grupoApi(request,id=0):
    if request.method=='GET':
        grupo = Grupo.objects.all()
        grupo_serializer = GrupoSerializer(grupo, many=True)
        return JsonResponse(grupo_serializer.data, safe=False)

    elif request.method=='POST':
        grupo_data=JSONParser().parse(request)
        grupo_serializer = GrupoSerializer(data=grupo_data)
        if grupo_serializer.is_valid():
            grupo_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        grupo_data = JSONParser().parse(request)
        grupo=Grupo.objects.get(GrupoId=grupo_data['GrupoId'])
        grupo_serializer=GrupoSerializer(grupo,data=grupo_data)
        if grupo_serializer.is_valid():
            grupo_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        grupo=Grupo.objects.get(GrupoId=id)
        grupo.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)



@csrf_exempt
def tareaApi(request,id=0):
    if request.method=='GET':
        tarea = Tarea.objects.all()
        tarea_serializer = TareaSerializer(tarea, many=True)
        return JsonResponse(Tarea_serializer.data, safe=False)

    elif request.method=='POST':
        tarea_data=JSONParser().parse(request)
        tarea_serializer = TareaSerializer(data=tarea_data)
        if tarea_serializer.is_valid():
            tarea_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        tarea_data = JSONParser().parse(request)
        tarea=Tarea.objects.get(TareaId=tarea_data['TareaId'])
        tarea_serializer=TareaSerializer(tarea,data=tarea_data)
        if tarea_serializer.is_valid():
            department_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        tarea=Tarea.objects.get(TareaId=id)
        tarea.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)



@csrf_exempt
def alumnoApi(request,id=0):
    if request.method=='GET':
        alumno = Alumno.objects.all()
        alumno_serializer = AlumnoSerializer(alumno, many=True)
        return JsonResponse(alumno_serializer.data, safe=False)

    elif request.method=='POST':
        alumno_data=JSONParser().parse(request)
        alumno_serializer = AlumnoSerializer(data=alumno_data)
        if alumno_serializer.is_valid():
            alumno_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        alumno_data = JSONParser().parse(request)
        alumno=Alumno.objects.get(AlumnoId=alumno_data['AlumnoId'])
        alumno_serializer=AlumnoSerializer(alumno,data=alumno_data)
        if alumno_serializer.is_valid():
            alumno_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        alumno=Alumno.objects.get(AlumnoId=id)
        alumno.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)


@csrf_exempt
def SaveFile(request):
    file=request.FILES['myFile']
    file_name = default_storage.save(file.name,file)

    return JsonResponse(file_name,safe=False)
