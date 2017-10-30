import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {

  myData: Array<any>;

  constructor(http:Http) {
    
    this.http.get('https://still-reaches-11827.herokuapp.com/api/orders/59f70ca1910bc40004b8ad18')
      .map(response => response.json())
      .subscribe(res => this.myData = res);
  }

  ngOnInit() {
  }

}
