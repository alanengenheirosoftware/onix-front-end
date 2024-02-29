import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOperationComponent } from './pages/create-operation/create-operation.component';
import { CreateServiceComponent } from './pages/create-service/create-service.component';
import { ListServicesComponent } from './pages/list-services/list-services.component';
import { ListOperationsComponent } from './pages/list-operations/list-operations.component';
import { LoginComponent } from './pages/login/login.component';
import { ErrorNotFoundComponent } from './pages/error-not-found/error-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: ListServicesComponent
  },
  {
    path: 'entrar',
    component: LoginComponent
  },
  {
    path: 'operacoes/criar',
    component: CreateOperationComponent
  },
  {
    path: 'operacoes',
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
  {
    path: '**',
    component: ErrorNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
