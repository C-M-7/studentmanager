from django.shortcuts import render
from rest_framework.decorators import api_view
from .serializers import LogSerializer
from .models import Log
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from auditlog.models import LogEntry
from .serializers import AuditLogEntrySerializer
class AuditLogEntryList(generics.ListAPIView):
    serializer_class = AuditLogEntrySerializer
    def get_queryset(self):
        model_name = self.kwargs['Log']
        return LogEntry.objects.filter(content_type__model=Log)
# Create your views here.
@api_view(['GET'])
def getAllLogs(request):
    logs=Log.objects.all()
    serializer =LogSerializer(logs,many=True)
    return Response(serializer.data)
@api_view(['GET'])
def getLog(request,pk):
    log=Log.objects.get(sid=pk)
    serializer=LogSerializer(log,many=False)
    return Response(serializer.data)
@api_view(['POST'])
def newLog(request):
    data = request.data
    log = Log.objects.create(**data)
    serializer=LogSerializer(log,many=False)
    return Response(serializer.data)
@api_view(['PUT'])
def updateLog(request,pk):
    data = request.data
    log = Log.objects.get(sid=pk)
    log.step=request.data['step']
    log.name=request.data['name']
    log.gender=request.data['gender']
    log.city=request.data['city']
    log.pincode=request.data['pincode']
    log.degree=request.data['degree']
    log.branch=request.data['branch']
    log.batch=request.data['batch']
    log.email=request.data['email']
    log.quota=request.data['quota']
    log.updatetime=request.data['updatetime']
    log.cgpa=request.data['cgpa']
    log.sgpa=request.data['sgpa']
    log.prof=request.data['prof']
    log.scholar=request.data['scholar']
    log.save()


    serializer=LogSerializer(log,many=False)
    return Response(serializer.data)
@api_view(['DELETE'])
def deleteLog(request,pk):
    log = Log.objects.get(sid=pk)
    log.delete()
    
    return Response({'message':'Log is Deleted'},status=status.HTTP_200_OK)
