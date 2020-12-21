import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainInterfaceComponent } from './main-interface/main-interface.component';
import { NumbersBoardFlashesListComponent } from './numbers-board-flashes-list/numbers-board-flashes-list.component';
import { NumbersBoardVerticalListComponent } from './numbers-board-vertical-list/numbers-board-vertical-list.component';

const routes: Routes = [
  { path: '', component: MainInterfaceComponent },
  { path: 'vertical', component: NumbersBoardVerticalListComponent },
  { path: 'flashes', component: NumbersBoardFlashesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
