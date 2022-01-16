import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrawComponent } from './components/draw/draw.component';

const routes: Routes = [
  { path: '', redirectTo: '/draw', pathMatch: 'full' },
  { path: 'draw', component: DrawComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

