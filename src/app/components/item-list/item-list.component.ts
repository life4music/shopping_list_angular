import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/Item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  items: Item[];

  constructor() {}

  ngOnInit(): void {
    this.items = [];
  }

  deleteItem(item: Item) {
    this.items = this.items.filter((i) => i.id !== item.id);
  }

  addItem(item: Item) {
    this.items.push(item);
  }

  clearList() {
    this.items = this.items.filter((item) => !item.crossed);
  }
}
