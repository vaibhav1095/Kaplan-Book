import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private cancelClick = new Subject<any>();

  constructor(private http: HttpClient) { }

  onCancelClicked() {
    this.cancelClick.next(true);
  }

  onClicked() {
    return this.cancelClick.asObservable();
  }

  getBooks(): Observable<Book> {
    return this.http.get<Book>('https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep');
  }
}
