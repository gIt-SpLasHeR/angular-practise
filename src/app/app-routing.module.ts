import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { CustomComponent } from "./custom/custom.component";

import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos.component';
const routes: Routes = [
  { path: 'custom', component: CustomComponent },
  { path: '', component: HomeComponent },
  { path: 'todo', component: TodosComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
