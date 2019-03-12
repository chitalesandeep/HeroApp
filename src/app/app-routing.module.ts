import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from '../app/dashbord/dashbord.component';
import { HeroesComponent } from "../app/heroes/heroes.component";
import { LoginComponent } from '../app/login/login.component';
import { Title } from '@angular/platform-browser';

const approutes:Routes = [
  { path:'', redirectTo:'/login', pathMatch: 'full'},
  { path:'login', component:LoginComponent},
  { path:'home', component:DashbordComponent},
  { path:'heroes', component:HeroesComponent},
  { path:'movies', loadChildren:'./movies/movies.module#MoviesModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(approutes,{
      enableTracing: false
    })
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
