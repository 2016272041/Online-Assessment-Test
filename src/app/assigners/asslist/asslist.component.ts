import { Component, OnInit } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';
import { Asslist } from '../asslist';
import { AsslistDataService } from '../asslist-data.service';

@Component({
  selector: 'app-asslist',
  templateUrl: './asslist.component.html',
  styleUrls: ['./asslist.component.css']
})
export class AsslistComponent implements OnInit {
  length: Number;
  isLoading = true;

  @Input()
  asslist: Asslist[];

  @Output()
  remove: EventEmitter<Asslist> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Asslist> = new EventEmitter();

  constructor( private asslistdataService: AsslistDataService ) { }

  onToggleAsslistComplete(asslist: Asslist) {
    this.toggleComplete.emit(asslist);
  }

  onRemoveAsslist(asslist: Asslist) {
    this.remove.emit(asslist);
  }


  ngOnInit() {
  }

}
