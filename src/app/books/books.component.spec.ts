import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppService } from '../service/app.service';

import { BooksComponent } from './books.component';

fdescribe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksComponent ],
      imports: [FontAwesomeModule, HttpClientModule],
      providers: [AppService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should focus to true when called onClicked()', () => {
    component.onClicked();
    expect(component.focused).toEqual(true);
  });

  it('should focused to false when called onBlur()', () => {
    component.onBlur();
    expect(component.focused).toEqual(false);
  });

  it('should bookList to false when called onCreateNewBook()', () => {
    component.onCreateNewBook();
    expect(component.bookList).toEqual(false);
  });

  it('should collectBooks to be called when called ngOnInit()', () => {
    spyOn(component, 'collectBooks').and.callThrough();
    component.ngOnInit();
    expect(component.collectBooks).toHaveBeenCalled();
  });
});
