import { Component } from '@angular/core';

export class TrelloBoard {
  data: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Trello JSON Export Beautifier';
  trello_json: TrelloBoard = {
    data: {}
  };
  
  file: File;
  onChange(event) {
    // Get the file when the input changes.
    this.file = event.srcElement.files[0];
    // Create a new file reader to read the file.
    var reader = new FileReader();
    // When the reader is loaded and ready, spit out the file content as json.
    // capture outer this and and pass inside. () => 
    reader.onload = () => {
      this.trello_json.data = JSON.parse(reader.result);
      console.log(this.trello_json.data)
    }
    // Read the file as text.
    reader.readAsText(this.file);
  }
}
