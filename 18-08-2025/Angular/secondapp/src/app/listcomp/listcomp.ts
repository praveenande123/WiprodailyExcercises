import { Component } from '@angular/core';

@Component({
  selector: 'app-listcomp',
  standalone: true,
  templateUrl: './listcomp.html',
  styleUrls: ['./listcomp.css']
})
export class Listcomp {
  names: string[] = ['Alice', 'Bob', 'Charlie', 'Diana'];
}
