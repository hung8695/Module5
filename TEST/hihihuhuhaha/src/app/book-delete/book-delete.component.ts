import { Component, OnInit } from '@angular/core';
import {BookService} from "../book.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {
  // @ts-ignore
  bookForm: FormGroup;
  // @ts-ignore
  id: number;
  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((parammap: ParamMap) => {
// @ts-ignore
      this.id = +parammap.get('id');
// @ts-ignore
      this.getBook(this.id);
    })
  }

  ngOnInit(): void {
  }
  getBook(id: number) {
return this.bookService.findById(id).subscribe((book) => {
    this.bookForm =new FormGroup({
      title: new FormControl(book.title),
      author: new FormControl(book.author),
      description: new FormControl(book.description)
    })
})
  }
  delete(id: number) {
return this.bookService.delete(id).subscribe(() => {
this.router.navigate(['/book/list']);
}, error => {
  console.log(error);
})
  }

}
