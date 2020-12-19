import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainInterfaceComponent } from './main-interface/main-interface.component';
import { NumbersBoardVerticalListComponent } from './numbers-board-vertical-list/numbers-board-vertical-list.component';

const routes: Routes = [
  { path: '', component: MainInterfaceComponent },
  { path: 'home', component: NumbersBoardVerticalListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
