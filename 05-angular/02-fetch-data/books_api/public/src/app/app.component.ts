import { Component } from '@angular/core';

import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private httpService: HttpService){}
  title = 'public';

  authors = [];
  books = [];

  ngOnInit(){
    this.getAuthors();
    this.getBooks();
  }
  getAuthors(){
    let observable = this.httpService.getAuthors();
    observable.subscribe(data => {
      console.log('Got our authors!',data);
      this.authors = data['authors'];
    });
  }
  getBooks(){
    let observable = this.httpService.getAuthors();
    observable.subscribe(data => {
      console.log('Got our books!',data);
      this.books = data['books'];
    });

  }
}
