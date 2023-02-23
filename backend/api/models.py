from django.db import models

class Document(models.Model):
    document_content = models.TextField()
    annotations = models.JSONField(default=list)

    def __str__(self):
        return f'Document: {self.document_content}, Annotations: {self.annotations}'

    def to_dict(self):
        annotation_list = []
        for annotation in self.annotations:
            annotation_dict = {
                'start': annotation.start,
                'end': annotation.end,
                'label': annotation.label,
                'text': annotation.text,
            }
            annotation_list.append(annotation_dict)
        return {
            'document': self.document_content,
            'annotations': annotation_list
        }


class Annotation(models.Model):
    document = models.ForeignKey('Document', on_delete=models.CASCADE)
    label = models.CharField(max_length=255)
    start = models.PositiveIntegerField()
    end = models.PositiveIntegerField()
    text = models.TextField()

    def __str__(self):
            return f"{self.document.id}: {self.label} ({self.start}, {self.end}) - {self.text}"