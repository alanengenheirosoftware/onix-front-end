import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 constructor(private httpClient: HttpClient) {}

 ui = undefined
 web = undefined
 api = undefined
 services = undefined

  ngOnInit(): void {
    this.httpClient.get('http://localhost:3000/version').subscribe(
      (subscriber: any) => {
        this.ui = subscriber.ui
        this.web = subscriber.web
        this.api = subscriber.api
        this.services = subscriber.services
      }
    )
  }
}
