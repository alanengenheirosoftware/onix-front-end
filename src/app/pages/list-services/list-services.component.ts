import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-services',
  templateUrl: './list-services.component.html',
  styleUrls: ['./list-services.component.css']
})
export class ListServicesComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  data: any = []

  ngOnInit(): void {
    this.httpClient.get('http://localhost:3000/services').subscribe(
      (subscriber: any) => {
        this.data = subscriber
      }
    )
  }
}
