import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'lib-my-shared-library',
  template: `
    <p>
      my-shared-library works!
    </p>
  `,
  styles: []
})
export class MySharedLibraryComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAwesomeStuff();
  }


  public getAwesomeStuff() {
      this.http.get('http://awesomeStuff');
  }

}
