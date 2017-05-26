import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Trello JSON Export Beautifier';
  trello_json = {}; // Put your trello json export data here.
}
