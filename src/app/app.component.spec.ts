import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

fdescribe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [BrowserAnimationsModule]
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create the app', () => {

    expect(app).toBeTruthy();
  });

  it(`should have as title 'kaplan-book'`, () => {
    expect(app.title).toEqual('kaplan-book');
  });

  it('should toggle when called onSidenavToggle mathod', () => {
    app.onSidenavToggle();
    expect(app.closed).toEqual(true);
  })
});
