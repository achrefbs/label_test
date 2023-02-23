The goal is to create a user interface with BE/FE made with Django/Angular to label words in a document
and export the position of the annotated words in a JSON file format. As an example in fig 1, a document
was annotated with labels: SKILLS, EXPERIENCE, DIPLOMA and DIPLOMA_MAJOR. The application should
have the following functions:
1) User inputs a labels list
2) Selects a label from the list
3) Selects a word or a sentence from the document and annotate with the desired label
4) Export the annotation to a JSON format with labels positions and labels titles. The
JSON file should follow this format:
a. {“document”:<text>, “annotation”:[{start: <start position>, “end”: <start position>,
“label”: <label>, “text”:<Annotated Text>