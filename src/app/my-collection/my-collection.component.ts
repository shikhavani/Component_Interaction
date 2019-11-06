import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
@Component({
  selector: 'app-my-collection',
  templateUrl: './my-collection.component.html',
  styleUrls: ['./my-collection.component.css']
})
export class MyCollectionComponent implements OnInit, OnChanges{
  @Input("parentAd") collectionsPremiumAd: string;

  @Input("fromTrending") likedItem: any;

  @Input("albumsRef") albumRef;

  isAlreadyPremiumMember: boolean;
  collectionLikedList = [];
  constructor(private dataService: SharedDataService) { }

  ngOnInit() {
    this.dataService.isPremium.subscribe(msg => this.isAlreadyPremiumMember = !msg);
  }

  ngOnChanges(changes: SimpleChanges) {
    let change = changes['likedItem'];
    if (change.currentValue) {
      this.collectionLikedList.push(change.currentValue);
    }
  }

  onClickGetPremium() {
    this.albumRef.onClickGetPremium();
    this.dataService.onPremiumSubsribed(true);
  }

  onUnliked(list, index ) {
    return list.splice(index, 1);
  }

}
