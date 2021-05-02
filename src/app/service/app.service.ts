import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book> {
    return this.http.get<Book>('https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep');
  }
}
