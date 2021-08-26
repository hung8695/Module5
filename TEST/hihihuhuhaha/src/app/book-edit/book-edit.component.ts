import { Component, OnInit } from '@angular/core';
import {BookService} from "../book.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  // @ts-ignore
   bookForm: FormGroup;
// @ts-ignore
  id: number;
  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((parammap: ParamMap) => {
      // @ts-ignore
      this.id = +parammap.get('id');
      this.getBook(this.id);
    })
  }

  ngOnInit(): void {
  }
  getBook(id: number) {
   return this.bookService.findById(id).subscribe(book => {
     this.bookForm = new FormGroup({
      title: new FormControl(book.title),
       author: new FormControl(book.author),
       description: new FormControl(book.description)
     })
   })
  }
  update(id: number) {
const book = this.bookForm.value;
this.bookService.update(id, book).subscribe(() => {
alert('Update book successfully!');
}, error => {
  console.log(error);
})

  }

}
