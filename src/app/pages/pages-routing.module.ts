import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {PagesComponent} from "./pages.component";

const routes: Routes = [
  {path:'dashboard',component:PagesComponent, children:[
      {path:'',component:DashboardComponent},
      {path:'notFound', component:NotfoundComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
