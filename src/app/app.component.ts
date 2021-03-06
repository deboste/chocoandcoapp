import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  title = 'chocoandco';
  word = 'Chocolatine';
  apiUrl = process.env.api_url || 'http://localhost:3000';
  clickMessage = '';


  getWord() {

    // Call the http GET
    this.http.get<Words>(this.apiUrl, {responseType: 'json'}).subscribe(data => {
      console.log(data);
      this.clickMessage = data.message;
    });
  }
}

export class Words {
  message: string;
}
