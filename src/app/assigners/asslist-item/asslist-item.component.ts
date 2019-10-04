import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { Asslist } from '../asslist';

@Component({
  selector: 'app-asslist-item',
  templateUrl: './asslist-item.component.html',
  styleUrls: ['./asslist-item.component.css']
})
export class AsslistItemComponent implements OnInit {

  @Input() asslist: Asslist;

  @Output()
  remove: EventEmitter<Asslist> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Asslist> = new EventEmitter();

  constructor() { }

  toggleAsslsistComplete(asslist: Asslist) {
    this.toggleComplete.emit(asslist);
  }

  removeAsslist(asslist: Asslist) {
    this.remove.emit(asslist);
  }

  ngOnInit() {
  }

}
