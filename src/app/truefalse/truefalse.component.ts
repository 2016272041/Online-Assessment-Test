import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-truefalse',
  templateUrl: './truefalse.component.html',
  styleUrls: ['./truefalse.component.css']
})
export class TruefalseComponent implements OnInit {
  @Input() trueValue = true;
  @Input() falseValue = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }


  writeValue(obj: any): void {
    if (obj === this.trueValue) {
      this.renderer.setProperty(this.elementRef.nativeElement, 'checked', true);
    } else {
      this.renderer.setProperty(this.elementRef.nativeElement, 'checked', false);
    }
  }
  ngOnInit() {
  }

}
