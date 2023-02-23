import { Component } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import { saveAs } from 'file-saver';

export type Label = {
  label: string,
  color: string
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private apiService: ApiServiceService) {}


  labelList: Label[] = [{label:'SKILLS', color: 'red'},
  {label:'EXPERIENCE', color: 'blue'},
  {label:'DIPLOMA', color: 'green'},
  {label:'DIPLOMA_MAJOR', color: 'purple'},]
  selectedLabel: Label | null = null;
  words: {word:string, label:Label | null}[] = [];
  
  documentContent!: string;
  response : any;

  onFileUploaded(content: string) {
    this.documentContent = content;
    let listofwords = this.documentContent.split(' ');
    for(let i=0; i<listofwords.length; i++){
      this.words.push({word:listofwords[i], label: null})
  }
  }

  onWordLabeled(word: {word:string, label:Label | null}) {
    if (this.selectedLabel) {
      word.label = this.selectedLabel;
    }
  }

  getLabel(label: Label) {
    this.selectedLabel = label;
  }
  annotate() {
    this.apiService.annotateDocument(this.words, this.documentContent).subscribe({
      next: (response) =>{
        this.response = response;
      },
      error:() => console.log('error'),
      complete:() => {
        console.log('complete');
        const json = JSON.stringify(this.response.document);
        const blob = new Blob([json], { type: 'application/json' });
        saveAs(blob, 'annotations.json');
      }
    });
  }
}
