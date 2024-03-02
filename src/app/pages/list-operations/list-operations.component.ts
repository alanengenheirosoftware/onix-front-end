import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-operations',
  templateUrl: './list-operations.component.html',
  styleUrls: ['./list-operations.component.css']
})
export class ListOperationsComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  data: any = []

  ngOnInit(): void {
    this.httpClient.get('http://localhost:3000/operations').subscribe(
      (subscriber: any) => {
        this.data = subscriber
      }
    )
  }
}
