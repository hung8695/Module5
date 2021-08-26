import { Component, OnInit } from '@angular/core';
import {BookService} from "../book.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {
  // @ts-ignore
  cityForm: FormGroup;
  // @ts-ignore
  id: number;
  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((parammap: ParamMap) => {
// @ts-ignore
      this.id = +parammap.get('id');
this.getBook(this.id);
    })
  }

  ngOnInit(): void {
  }
  getBook() {

  }

}
