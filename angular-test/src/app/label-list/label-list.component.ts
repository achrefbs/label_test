import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-label-list',
  templateUrl: './label-list.component.html',
  styleUrls: ['./label-list.component.css']
})
export class LabelListComponent {
  @Input() labelList: {label:string, color:string}[] = [];
  labelListInput = '';
  @Output() onLabelSelected = new EventEmitter<{label:string, color:string}>();
  
  getRandomColor() {
    const Hexletters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += Hexletters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  addLabel() {
    if (this.labelListInput) {
      let listofLabels = this.labelListInput.split(' ');
      for(let i=0; i<listofLabels.length; i++){
      this.labelList.push({label: listofLabels[i], color: this.getRandomColor()});
      }
      this.labelListInput = '';
    }
  }

  onLabelSelect(label: {label:string, color:string}) {
    this.onLabelSelected.emit(label);
  }
}