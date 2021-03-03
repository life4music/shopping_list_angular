import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Item } from '../../models/Item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  @Output() deleteItem: EventEmitter<Item> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  // klasy
  setClasses() {
    let classes = {
      item: true,
      crossed: this.item.crossed,
    };
    return classes;
  }

  // odhaczenie
  onChange(item) {
    item.crossed = !item.crossed;
  }

  // usuwanie
  onClick(item) {
    this.deleteItem.emit(item);
  }
}
