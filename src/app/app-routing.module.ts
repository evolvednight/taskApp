import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { SummaryComponent } from './summary/summary.component';
import { BuyComponent } from './buy/buy.component';

const routes: Routes = [
  {path: '', component: TasksComponent, data: { animation: 'Task'} },
  {path: 'summary', component: SummaryComponent, data: { animation: "Summary"} },
  {path: 'buy', component: BuyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
