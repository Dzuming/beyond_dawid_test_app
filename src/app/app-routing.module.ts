import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: '../app/home/home.module#HomeModule' },
  {
    path: 'home',
    loadChildren: '../app/home/home.module#HomeModule'
  },
  {
    path: 'todo',
    loadChildren: '../app/todo/todo.module#TodoModule'
  },
  {
    path: 'rss',
    loadChildren: '../app/rss/rss.module#RssModule'
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true}) // important to use hash if the app has to work correctly on Peach platform!!!
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
