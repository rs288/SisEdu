from django.db import models

# Create your models here.

class Califica(models.Model):
    CalificaId = models.AutoField(primary_key=True)
    Alumno = models.CharField(max_length=100)
    Tarea = models.CharField(max_length=100)
    Grupo = models.CharField(max_length=100)
    CalificaNum = models.CharField(max_length=100)
    Retro = models.CharField(max_length=200)

class Grupo(models.Model):
    GrupoId = models.AutoField(primary_key=True)
    Grupo = models.CharField(max_length=100) 	    
    Materia = models.CharField(max_length=100)
    Hora = models.CharField(max_length=100)

class Tarea(models.Model): 
    TareaId= models.AutoField(primary_key=True)
    Nombre = models.CharField(max_length=100)
    Materia = models.CharField(max_length=100)
    Grupo = models.CharField(max_length=100)
    Descrip = models.CharField(max_length=100)
    Fecha = models.CharField(max_length=100)
    Archivo = models.CharField(max_length=100)

class Alumno(models.Model):
    AlumnoId = models.AutoField(primary_key=True)
    Nombre = models.CharField(max_length=100)
    Apellido = models.CharField(max_length=100)
    Correo = models.CharField(max_length=100)
    Grupo = models.CharField(max_length=100)
    Materia = models.CharField(max_length=100)
