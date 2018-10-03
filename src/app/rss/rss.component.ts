import { Component, OnInit } from '@angular/core';
import {BeyondService} from '@getbeyond/ng-beyond-js';

@Component({
  selector: 'app-rss',
  templateUrl: './rss.component.html',
  styleUrls: ['./rss.component.css']
})
export class RssComponent implements OnInit {
  title = 'My app';
  constructor(private beyondService: BeyondService) {

  }

  ngOnInit() {
    this.beyondService.app.getAllApps().subscribe(apps => console.log(apps));
    console.log(this.beyondService)
  }

}
