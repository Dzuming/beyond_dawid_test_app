import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RssComponent} from './rss.component';

const rssRoutes: Routes = [
  {
    path: '',
    component: RssComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(rssRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RssRoutingModule { }
