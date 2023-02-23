import { Component, Input, EventEmitter, Output } from '@angular/core';
import {Label} from '../app.component'
@Component({
  selector: 'app-document-viewer',
  templateUrl: './document-viewer.component.html',
  styleUrls: ['./document-viewer.component.css']
})
export class DocumentViewerComponent {
  @Input() words: {word:string, label:Label | null}[] = [];
  @Output() WordClicked = new EventEmitter<{word:string, label:Label | null}>();
  
  onWordClicked(word: {word:string, label:Label | null}) {
    this.WordClicked.emit(word);
  }
}
