import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiServiceService {

  private apiUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) {}

  annotateDocument(annotations: any[], documentContent: string) {
    const url = `${this.apiUrl}/annotate_document/`;
    const body = { annotations , documentContent};
    return this.http.post(url, body);
  }
}
