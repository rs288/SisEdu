from django.conf.urls import url
from SisEduApp import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[
    url(r'^califica$',views.calificaApi),
    url(r'^califica/([0-9]+)$',views.calificaApi),

    url(r'^grupo$',views.grupoApi),
    url(r'^grupo/([0-9]+)$',views.grupoApi),

    url(r'^tarea$',views.tareaApi),
    url(r'^tarea/([0-9]+)$',views.tareaApi),

    url(r'^alumno$',views.alumnoApi),
    url(r'^alumno/([0-9]+)$',views.alumnoApi),

    url(r'^grupo/SaveFile$', views.SaveFile)
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
