import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { AppService } from '../service/app.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book;
  faSearch = faSearch;
  focused= false;
  bookList= true;
  constructor(private service: AppService) {
    this.service.onClicked().subscribe((data)=> {
      this.bookList= true;
      console.log(this.bookList);
    })
  }

  collectBooks() {
    this.service.getBooks().subscribe(data=> {
      this.books = data;
      console.log(this.books);
    });
  }

  onClicked() {
    this.focused = true;
  }

  onBlur() {
    this.focused = false;
  }

  onCreateNewBook() {
    this.bookList = false;
    console.log(this.bookList);
  }
  ngOnInit(): void {
    this.collectBooks();
  }

}
