import { Component, OnInit } from '@angular/core';
import {BookService} from "../book.service";
import {Book} from "../book";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  // @ts-ignore
  book: Book;
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
getBook(id: number){
    this.bookService.findById(id).subscribe((book) => {
      this.book = book;
      console.log(this.book)
    })
}

}
