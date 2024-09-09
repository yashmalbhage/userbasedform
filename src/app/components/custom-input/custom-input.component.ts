import { Component, Input } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [MatInputModule, CommonModule, FormsModule],
  templateUrl: './custom-input.component.html',

  styleUrl: './custom-input.component.css'
})
export class CustomInputComponent {
  @Input() label :any
  @Input() inputType :any
  @Input() placeholder :any
  @Input() name :any
  @Input() databind:any






}
