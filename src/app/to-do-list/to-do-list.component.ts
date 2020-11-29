import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  list = ['Task1', 'Task2', 'Task3'];
  input = '';

  constructor() {}

  addToList(item) {
    this.list.push(item);
  }

  removeFromList(item) {
    let idx = this.list.indexOf(item);
    this.list.splice(idx, 1);
  }

  ngOnInit(): void {}
}
