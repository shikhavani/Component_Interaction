import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyCollectionComponent } from './my-collection/my-collection.component';
import { TopAlbumsComponent } from './top-albums/top-albums.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { MySubscriptionsComponent } from './my-subscriptions/my-subscriptions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyCollectionComponent,
    TopAlbumsComponent,
    MySubscriptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
