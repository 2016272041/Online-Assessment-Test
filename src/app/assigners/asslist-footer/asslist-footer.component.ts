import { Component, OnInit, Input } from '@angular/core';
import { Asslist } from '../asslist';

@Component({
  selector: 'app-asslist-footer',
  templateUrl: './asslist-footer.component.html',
  styleUrls: ['./asslist-footer.component.css']
})
export class AsslistFooterComponent implements OnInit {

  @Input()
  asslist: Asslist[];
  constructor() { }

  ngOnInit() {
  }

}
