import { Component, OnInit } from '@angular/core';
import { Teacher, Student } from '../../entity/IPeople'
@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {
  displayTxt: string = '';
  constructor() { }

  ngOnInit() {
    let teacher: Teacher = new Teacher();
    teacher.id = '1';
    this.displayTxt = teacher.constructor.name;
  }

}
