from rest_framework import serializers
from SisEduApp.models import Califica,Grupo,Tarea,Alumno

class CalificaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Califica
        fields = ('CalificaId',
                  'Alumno', 
                  'Tarea',
                  'Grupo',
                  'CalificaNum',
                  'Retro')

class GrupoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grupo
        fields = ('GrupoId',
                  'Grupo', 
                  'Materia',
                  'Hora')

class TareaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tarea
        fields = ('TareaId',
                  'Nombre', 
                  'Materia',
                  'Grupo',
                  'Descrip',
                  'Fecha',
                  'Archivo')

class AlumnoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alumno
        fields = ('AlumnoId',
                  'Nombre', 
                  'Apellido',
                  'Correo',
                  'Grupo',
                  'Materia')

