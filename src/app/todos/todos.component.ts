import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { ITodo } from '../../entity/ITodo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(private  http: HttpService) { }
  toDoList: ITodo[];
  ngOnInit() {
    this.getTodos();
  }

  getTodos(): void {
    this.http.getTodos()
        .subscribe(res => this.toDoList = res);
  }

}
