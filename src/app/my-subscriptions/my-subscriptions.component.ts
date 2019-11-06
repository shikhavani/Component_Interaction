import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-subscriptions',
  templateUrl: './my-subscriptions.component.html',
  styleUrls: ['./my-subscriptions.component.css']
})
export class MySubscriptionsComponent implements OnInit {
  subsriptionsList = [];
  constructor() { }

  ngOnInit() {
    this.subsriptionsList = [{
      "name": "Sub-1"
    }, {
      "name": "Sub-2"
    }]
  }
}
