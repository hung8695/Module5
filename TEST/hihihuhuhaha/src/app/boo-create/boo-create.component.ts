import { Component, OnInit } from '@angular/core';
import {BookService} from "../book.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-boo-create',
  templateUrl: './boo-create.component.html',
  styleUrls: ['./boo-create.component.css']
})
export class BooCreateComponent implements OnInit {
  // @ts-ignore
  bookForm = new FormGroup({
    id: new FormControl(),
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl()
  })
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }
submit() {
const book =this.bookForm.value;
this.bookService.save(book).subscribe(() => {
this.bookForm.reset();
alert('Create new book successfully')
}, error => {
  console.log(error);
})
}
}
