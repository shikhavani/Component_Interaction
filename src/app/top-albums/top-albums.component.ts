import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
@Component({
  selector: 'app-top-albums',
  templateUrl: './top-albums.component.html',
  styleUrls: ['./top-albums.component.css']
})
export class TopAlbumsComponent implements OnInit {
  private _albumsEmail: string;
  premiumSubsribed = "You are now a premium member"

  @Output("getPremium") premiumEvent = new EventEmitter<string>();

  @Input("parentAd") albumsPremiumAd;

  @Input("parentEmail")
  set albumsEmail (message: string) {
    if (typeof message != 'undefined') {
      this._albumsEmail = message + " @gmail.com";
    }
  }
  get albumsEmail() {
    return this._albumsEmail;
  }
  isAlreadyPremiumMember: boolean;


  constructor(private dataService: SharedDataService) { }

  ngOnInit() {
    this.dataService.isPremium.subscribe(msg => this.isAlreadyPremiumMember = !msg);
  }

  onClickGetPremium() {
    this.premiumEvent.emit(this.premiumSubsribed);
    this.dataService.onPremiumSubsribed(true);
  }
}
