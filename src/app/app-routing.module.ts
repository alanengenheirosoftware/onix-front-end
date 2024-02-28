import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOperationComponent } from './pages/create-operation/create-operation.component';
import { CreateServiceComponent } from './pages/create-service/create-service.component';

const routes: Routes = [
  {
    path: '',
    component: CreateServiceComponent
  },
  {
    path: 'operacoes/criar',
    component: CreateOperationComponent
  },
  {
    path: 'servicos/criar',
    component: CreateServiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
