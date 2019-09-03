import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Truefalse } from '../models/truefalse';
@Component({
  selector: 'app-truefalse',
  templateUrl: './truefalse.component.html',
  styleUrls: ['./truefalse.component.css']
})
export class TruefalseComponent implements OnInit {
  formgroup: Truefalse;
  @Input() trueValue = true;
  @Input() falseValue = false;

  disabletrueValueOnAdd = true;
  disablefalseValueOnAdd = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }


  writeValue(obj: any): void {
    if (obj === this.trueValue) {
      this.renderer.setProperty(this.elementRef.nativeElement, 'checked', true);
    } else {
      this.renderer.setProperty(this.elementRef.nativeElement, 'checked', false);
    }
  }

  onSubmit(formgroup: Truefalse): void {
    if (this.trueValue) {
      console.log('check answer', true);
    } else {
      console.log('chek answer', false);
    }
  }

  ngOnInit() {
  }
}
