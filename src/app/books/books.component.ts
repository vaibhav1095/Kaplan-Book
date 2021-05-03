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
  books: any[];
  faSearch = faSearch;
  focused= false;
  bookList= true;
  private _searchValue='';
  filteredBooks: any[]= []
  constructor(private service: AppService) {
    this.service.onClicked().subscribe((data)=> {
      this.bookList= true;
    })
  }

  get searchValue() : string{
    return this._searchValue;
  }

  set searchValue(value: string) {
    this._searchValue = value;
    this.filteredBooks = this.filterByTitle(value);
  }

  collectBooks() {
    this.service.getBooks().subscribe(data=> {
      this.books = data.items;
      this.filteredBooks = this.books;
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
  }

  filterByTitle(value) {
    value = value.toLocaleLowerCase();
    return this.books.filter((book) => book.volumeInfo.title.toLocaleLowerCase().indexOf(value)!== -1);
  }
  ngOnInit(): void {
    this.collectBooks();
  }

}
