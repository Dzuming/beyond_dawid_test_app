import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: 'src/app/home/home.module#HomeModule' },
  {
    path: 'home',
    loadChildren: 'src/app/home/home.module#HomeModule'
  },
  {
    path: 'todo',
    loadChildren: 'src/app/todo/todo.module#TodoModule'
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
