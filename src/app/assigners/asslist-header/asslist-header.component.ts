import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Asslist } from '../asslist';

@Component({
  selector: 'app-asslist-header',
  templateUrl: './asslist-header.component.html',
  styleUrls: ['./asslist-header.component.css']
})
export class AsslistHeaderComponent implements OnInit {

  newAsslist: Asslist = new Asslist();

  @Output()
  add: EventEmitter<Asslist> = new EventEmitter();
  constructor() { }

  addAsslist() {
    this.add.emit(this.newAsslist);
    this.newAsslist = new Asslist();
  }
  ngOnInit() {
  }

}
