import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  brews: object;


  //dependency injection
  constructor(private myhttp: HttpService) { }

  ngOnInit(): void {
    this.myhttp.getBeer().subscribe(data => {
      this.brews = data;
      console.log(this.brews);
    });
  }

}
