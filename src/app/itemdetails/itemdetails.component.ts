import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-itemdetails',
  templateUrl: './itemdetails.component.html',
  styleUrls: ['./itemdetails.component.css']
})
export class ItemdetailsComponent implements OnInit {
  Items: Item[]; 
  searchValue: string;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('/assets/Items.json').subscribe((result: Item[]) => {
      this.Items = result;
      // console.log(result)


      // let testarr = Object.entries(result)
      // console.log(testarr[0][1])
      // this.Items = testarr[0][1]
    });
  }
}
