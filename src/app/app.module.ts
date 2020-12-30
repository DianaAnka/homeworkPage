import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainInterfaceComponent } from './main-interface/main-interface.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NumbersBoardVerticalListComponent } from './numbers-board-vertical-list/numbers-board-vertical-list.component';
import { SharedModule } from '../shared/shared.module';
import { ResultComponent } from './result/result.component';
import { NumbersBoardFlashesListComponent } from './numbers-board-flashes-list/numbers-board-flashes-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainInterfaceComponent,
    NumbersBoardVerticalListComponent,
    ResultComponent,
    NumbersBoardFlashesListComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
