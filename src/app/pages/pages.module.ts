import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';

import {AppRoutingModule} from "../app-routing.module";
import {PagesComponent} from "./pages.component";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    DashboardComponent,
    NotfoundComponent,
    PagesComponent//IMPORTANTE

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    AppRoutingModule,
    SharedModule,
  ],
  exports:[
    DashboardComponent
  ]
})
export class PagesModule { }
