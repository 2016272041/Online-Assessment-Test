import { Component } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';
@Component({
  selector: 'app-truefalse',
  templateUrl: './truefalse.component.html',
  styleUrls: ['./truefalse.component.css']
})
export class TruefalseComponent {
  masterSelected: boolean;
  checklist: any;
  unchecklist: any;
  checkedList: any;
  uncheckedlist: any;
  maseterUnselected: boolean;

  constructor() {
    this.masterSelected = false;
    this.maseterUnselected = true;
    this.checklist = [
      {id: 1, value: 'Type Script and Native Script functions both are same', isSelected: false},
      {id: 2, value: 'OWASP application security function completely production Web Applications', isSelected: true},
      {id: 3, value: 'Node javascript function enumerate node packages everything completely bundled library', isSelected: true},
      // tslint:disable-next-line:max-line-length
      {id: 4, value: 'Angular data binding function helpful fetch the particular database data everything get and store the app API', isSelected: true}
    ];
    this.getCheckeditemList();

    this.unchecklist = [
      {id: 1, value: 'Ma'}
    ];
  }

  checkUncheckAll() {
    for (let i = 0; i < this.checkedList.length; i++) {
      this.checkedList[i].isSelected = this.masterSelected;
    }
    this.getCheckeditemList();

    for (let i = 0; i < this.checkedList.length; i++) {
      this.checkedList[i].isUnselected = this.masterSelected;
    }
    this.getCheckeditemList();
  }

  isAllSelected() {
    this.masterSelected = this.checklist.every(function(item: any) {
      return item.isSelected === true;
    });
    this.getCheckeditemList();
  }

  getCheckeditemList() {
    this.checkedList = [];
    for (let i = 0; i < this.checklist.length; i++) {
      if (this.checklist[i].isSelected) {
      this.checkedList.push(this.checklist[i]);
      }
    }
    this.checkedList = JSON.stringify(this.checkedList);
    for (let i = 0; i < this.checklist.length; i++) {
      if (this.checklist[i].isUnselected) {
      this.checkedList.push(this.checklist[i]);
      }
    }
  }
}
