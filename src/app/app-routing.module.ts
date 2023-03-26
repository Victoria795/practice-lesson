import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { MainComponent } from './pages/main/main.component';
import { PeopleComponent } from './pages/people/people.component';

const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'people', component: PeopleComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
