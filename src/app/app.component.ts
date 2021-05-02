import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ViewChild } from '@angular/core';
import { HasElementRef } from '@angular/material/core/common-behaviors/color';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('openClose', [
      state('true', style({ width: '56px' })),
      state('false', style({ width: '240px' })),
      transition('false <=> true', animate(500))
    ])
  ]
})
export class AppComponent {
  title = 'kaplan-book';
  closed = false;

  @ViewChild('sidenav') sidenav : MatSidenav;

  onSidenavToggle() {
    this.closed = !this.closed;
  }
}
