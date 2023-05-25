import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InpedimentsComponent } from './inpediments/inpediments.component';
import { RetrospectionComponent } from './retrospection/retrospection.component';


const routes: Routes = [
  {
    path:"" , component : HomeComponent
  },
  {
    path:"impedements" , component: InpedimentsComponent
  },
  {
    path:"retrospection" , component: RetrospectionComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
