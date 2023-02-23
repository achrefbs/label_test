import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.css']
})
export class DocumentUploadComponent {
  @Output() fileUploaded = new EventEmitter<string>();

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const fileContent = reader.result as string;
      this.fileUploaded.emit(fileContent);
    };
    reader.readAsText(file);
  }
  
}
