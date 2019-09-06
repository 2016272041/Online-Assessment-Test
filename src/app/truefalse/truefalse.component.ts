import { Component } from '@angular/core';
@Component({
  selector: 'app-truefalse',
  templateUrl: './truefalse.component.html',
  styleUrls: ['./truefalse.component.css']
})
export class TruefalseComponent {
  isValid;
  boolean = true;
  answer = 1;
  changeValue(valid: boolean) {
    this.isValid = valid;
  }

}
