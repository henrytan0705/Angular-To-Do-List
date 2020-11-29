import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  list = ['Task1', 'Task2', 'Task3'];
  input: Item;

  constructor() {}

  addToList(item) {
    this.list.push(item);
  }

  removeFromList(idx) {
    this.list.splice(idx, 1);
  }

  ngOnInit(): void {}
}
