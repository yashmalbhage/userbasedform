import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DialogBoxComponent, CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_interview';
  showDialog = false;
  selectedUser: string = '';

  openForm(user: string) {
    this.selectedUser = user;
    this.showDialog = true;
  }

  onSave(data: any) {
    console.log('Saved data:', data);
    this.showDialog = false;
  }

  onCancel() {
    console.log('Form cancelled');
    this.showDialog = false;
  }
}
