import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  list = [
    { title: 'Task1', description: 'study angular' },
    { title: 'Task2', description: 'study react' },
    { title: 'Task3', description: 'study vue' }
  ];

  title;
  description;

  constructor() {}

  addToList(title, description) {
    const item = { title, description };
    this.list.push(item);
  }

  ngOnInit(): void {}
}
