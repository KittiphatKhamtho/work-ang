import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{

  title = '';
  getapi:any = Array;
  @Input() id: number = 0;
 
  

  constructor(private service :DataService){
   
  }
  @Output() showmee: EventEmitter<string> = new EventEmitter<string>();
  onClick(){
    this.service.getmovie(this.id).subscribe(res=>{
      this.getapi = res;
      this.showmee.emit(this.getapi);

    })
  }
  

}