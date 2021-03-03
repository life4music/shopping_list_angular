import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent implements OnInit {
  @Output() addItem: EventEmitter<any> = new EventEmitter();

  title: string;
  counter: number = 0;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const item = {
      id: this.counter,
      title: this.title,
      crossed: false,
    };
    this.addItem.emit(item);
    this.counter++;
    this.title = '';
  }
}
