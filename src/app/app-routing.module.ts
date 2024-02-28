import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOperationComponent } from './pages/create-operation/create-operation.component';

const routes: Routes = [
  {
    path: '',
    component: CreateOperationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
