import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  createBookForm: FormGroup;
  isForm = true;
  constructor(private fb: FormBuilder, private router: Router, private service: AppService) { }

  onSubmit(form) {
    console.log(form.value);
  }

  onCancel() {
    this.isForm = false;
    this.service.onCancelClicked();
  }

  ngOnInit(): void {
    this.createBookForm = this.fb.group({
      title: ['', Validators.required],
      authors: ['', Validators.required],
      publishedDate: ['', Validators.required],
      publisher: ['', Validators.required]
    })
  }

}
