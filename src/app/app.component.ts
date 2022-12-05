import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'workshop';


  edm: number = 0;
  geturl: any = Array;


  constructor(private service : DataService){
      
  }
 
  onMovieClick(message: string): void{
    this.geturl = message;
  }
}