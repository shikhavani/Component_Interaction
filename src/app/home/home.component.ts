import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import { MyCollectionComponent } from '../my-collection/my-collection.component'
import { SharedDataService } from '../shared-data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  appPremiumAd = "Get Premium";
  likedItem: any;
  trendingList = [{
    "name": "ABC", "status": "Like"
  }, {
    "name": "CDE","status": "Like"
  }, {
    "name": "FGH", "status": "Spam"
  }, {
    "name": "IJK", "status": "Like"
  }, {
    "name": "XYZ", "status": "Like"
  }]
  msg: string;
  msgFromCollection: string;
  subscribedList= [];
  isAlreadyPremiumMember: boolean;
  
  @ViewChild(MyCollectionComponent, {static: false}) collectionChild: MyCollectionComponent ;
  constructor(private dataService: SharedDataService) { }

  ngOnInit() {
    // this.dataService.isPremium.subscribe(msg => this.isAlreadyPremiumMember = !msg);
  }

  ngAfterViewInit() {
    this.trendingList.forEach((item, key) => {
      if (item.status === "Spam") {
        this.collectionChild.onUnliked(this.trendingList, key);
      }
    });
  }

  premiumSubsription($event) {
    this.msg = $event;
  }

  onLikeItem (item, index) {
    this.likedItem = item;
    this.trendingList.splice(index, 1);
  }

}
