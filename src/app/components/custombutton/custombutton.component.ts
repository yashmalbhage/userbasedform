import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custombutton',
  standalone: true,
  imports: [],
  templateUrl: './custombutton.component.html',
  styleUrl: './custombutton.component.css'
})
export class CustombuttonComponent {
  @Input() buttonLabel = '';


}
