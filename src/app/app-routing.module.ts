import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitComponent } from './components/init/init.component';
import { ResultComponent } from './components/result/result.component';

const routes: Routes = [
  { path: '', component: InitComponent },
  { path: 'result/:value', component: ResultComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
