import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOperationComponent } from './pages/create-operation/create-operation.component';
import { CreateServiceComponent } from './pages/create-service/create-service.component';
import { ListServicesComponent } from './pages/list-services/list-services.component';
import { ListOperationsComponent } from './pages/list-operations/list-operations.component';

const routes: Routes = [
  {
    path: '',
    component: ListServicesComponent
  },
  {
    path: 'operacoes/criar',
    component: CreateOperationComponent
  },
  {
    path: 'operacoes/',
    component: ListOperationsComponent
  },
  {
    path: 'servicos/criar',
    component: CreateServiceComponent
  },
  {
    path: 'servicos',
    component: ListServicesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
