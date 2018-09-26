import { Component, OnInit } from '@angular/core';
import {BeyondService} from '@getbeyond/ng-beyond-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  title = 'My app';
  constructor(
    private beyondService: BeyondService
  ) {}

  ngOnInit() {
    this.beyondService.afterBeyondAppReady();
  }
}
