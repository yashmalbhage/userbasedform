import { Component, Input,Output,EventEmitter, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common'
import { CustomInputComponent } from '../custom-input/custom-input.component';
import {MatRadioModule} from '@angular/material/radio'
import {MatCheckboxModule} from '@angular/material/checkbox'
@Component({
  selector: 'app-dialog-box',
  standalone: true,
  imports: [FormsModule, CommonModule, CustomInputComponent, MatRadioModule, MatCheckboxModule],
  templateUrl: './dialog-box.component.html',
  styleUrl: './dialog-box.component.css'
})
export class DialogBoxComponent {

  inputLabel1 = "size"
  inputLabel2 = "Position"
  inputLabel3 = "City"
  inputLabel4 = "State"
  inputType1 = 'number'
  inputType2 = "text"
  @Input() user?: string;
  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  formData = {
    size: null,
    position: null,
    radio: '',
    user1: false,
    user2: false,
    city: '',
    state: '',
  };
  ngOnInit() {
    if (this.user === 'user1') {
      this.formData.user1 = true;
    } else if (this.user === 'user2') {
      this.formData.user2 = true;
    }
  }

  savee(form: any) {
    if (form.valid) {
      this.save.emit(this.formData);
    }
  }

  cancell() {
    this.cancel.emit();
  }







  onClickSubmit(){

  }



}
