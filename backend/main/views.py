from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Product
from rest_framework import status
from .serializers import NoteSerializer
@api_view(['GET'])
def getData(request):
    notes = Product.objects.all()
    serializer = NoteSerializer(notes, many=True)
    notes = {"ids": 1, "name" : "this is a note"}
    return Response(serializer.data)

@api_view(['GET'])
def viewData(request,id):
    notes = Product.objects.get(id=id)
    serializer = NoteSerializer(notes)
    return Response(serializer.data)

@api_view(['POST'])
def addItem(request):
    serializer = NoteSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)