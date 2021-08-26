import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookListComponent} from "./book-list/book-list.component";
import {ViewComponent} from "./view/view.component";
import {BooCreateComponent} from "./boo-create/boo-create.component";
import {BookEditComponent} from "./book-edit/book-edit.component";
import {BookDeleteComponent} from "./book-delete/book-delete.component";

const routes: Routes = [{
  path: 'book/list',
  component: BookListComponent
},
  {path: 'view/:id',
  component: ViewComponent
  },
  {path: 'book/create',
  component: BooCreateComponent
  },
  {path: 'book/edit/:id',
  component: BookEditComponent
  },
  {path: 'book/delete/:id',
  component: BookDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
