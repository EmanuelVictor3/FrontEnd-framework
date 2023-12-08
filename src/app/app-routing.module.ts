import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { LuckDogComponent } from "./component/luck-dog/luck-dog.component";
import { DogBreedsComponent } from "./component/dog-breeds/dog-breeds.component";

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'luckyy', component: LuckDogComponent },
  { path: 'breeds', component: DogBreedsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
