import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainInterfaceComponent } from './main-interface/main-interface.component';
import { NumbersBoardFlashesListComponent } from './numbers-board-flashes-list/numbers-board-flashes-list.component';
import { NumbersBoardVerticalListComponent } from './numbers-board-vertical-list/numbers-board-vertical-list.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
 {path:'' , component:MainInterfaceComponent},
 { path: 'home', component: MainInterfaceComponent },
 {path:'vertical', component:NumbersBoardVerticalListComponent},
 {path:'flashes' , component:NumbersBoardFlashesListComponent},
 {path:'result' , component:ResultComponent},
 { path: '**', component: MainInterfaceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
