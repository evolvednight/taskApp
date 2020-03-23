import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  {path: '', component: TasksComponent },
  {path: 'summary', component: SummaryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
