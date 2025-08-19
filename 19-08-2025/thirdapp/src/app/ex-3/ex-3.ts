import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ex-3',
  imports: [CommonModule],
  templateUrl: './ex-3.html',
  styleUrl: './ex-3.css'
})
export class Ex3 {
   applyStyleOne: boolean = true;
  applyStyleTwo: boolean = false;

  // Function that returns an object for ngClass
  getNgClass() {
    return {
      'style1': this.applyStyleOne,
      'style2': this.applyStyleTwo
    };
  }
  toggleStyles() {
    this.applyStyleOne = !this.applyStyleOne;
    this.applyStyleTwo = !this.applyStyleTwo;
  }

}
