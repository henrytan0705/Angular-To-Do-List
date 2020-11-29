import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'todo-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  // title: string;
  // description: string;
  info: object;
  constructor() {}

  @Input() value;
  @Input() list;
  @Input() index: number;

  removeItem(index) {
    this.list.splice(index, 1);
  }

  ngOnInit(): void {}
}
