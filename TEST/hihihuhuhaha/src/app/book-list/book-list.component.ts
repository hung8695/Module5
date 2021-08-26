import { Component, OnInit } from '@angular/core';
import {BookService} from "../book.service";
import {Book} from "../book";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book [] = [];
  count = 0;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.bookService.getAll().subscribe((books) => {
      this.books = books;
      for (let i = 0; i < this.books.length; i++) {
        this.count = this.count +i;
    }})
  }
}
