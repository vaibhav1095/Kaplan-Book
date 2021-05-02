import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book;
  constructor(private service: AppService) { }

  collectBooks() {
    this.service.getBooks().subscribe(data=> {
      this.books = data;
      console.log(this.books);
    });
  }
  ngOnInit(): void {
    this.collectBooks();
  }

}
