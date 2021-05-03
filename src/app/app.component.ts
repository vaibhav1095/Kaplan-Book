import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ViewChild } from '@angular/core';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faArchive } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('openClose', [
      state('true', style({ width: '56px' })),
      state('false', style({ width: '300px' })),
      transition('false <=> true', animate(500))
    ])
  ]
})
export class AppComponent {
  title = 'kaplan-book';
  closed = false;
  faBook = faBook;
  faArchive= faArchive;

  onSidenavToggle() {
    this.closed = !this.closed;
  }
}
