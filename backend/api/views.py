from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from .models import Document, Annotation
import json



@csrf_exempt
def annotate_document(request):
    body = json.loads(request.body)
    document_content = body.get('documentContent')
    annotations = body.get('annotations')

    document = Document.objects.create(document_content=document_content)
    last_label = None
    word_counter = 0
    group_start = None
    group_end = None
    sentence = []
    words_with_same_label = []

    for i, annotation in enumerate(annotations):
        word_length = len(annotation['word'])
        word_counter += word_length
        if annotation['label']:
            if annotation['label']['label'] != last_label:
                if words_with_same_label:
                    text = ' '.join(words_with_same_label)
                    new_annotation = Annotation(document=document, start=group_start, end=group_end, label=current_label, text=text)
                    document.annotations.append(new_annotation)
                words_with_same_label = [annotation['word']]
                group_start = word_counter - word_length
                group_end = word_counter
                last_label = annotation['label']['label']
                current_label = annotation['label']['label']
            else:
                words_with_same_label.append(annotation['word'])
                group_end += word_length
                current_label = annotation['label']['label']
        else:
            last_label = None
    
    if words_with_same_label:
        text = ' '.join(words_with_same_label)
        new_annotation = Annotation(document=document, start=group_start, end=group_end, label=current_label, text=text)
        document.annotations.append(new_annotation)
    
    document_dict = document.to_dict()

    print(document_dict)

    return JsonResponse({'status': 'success', 'document': document_dict})
