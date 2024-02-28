import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CreateOperationComponent } from './pages/create-operation/create-operation.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CreateServiceComponent } from './pages/create-service/create-service.component';
import { ListServicesComponent } from './pages/list-services/list-services.component';
import { ListOperationsComponent } from './pages/list-operations/list-operations.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateOperationComponent,
    SidebarComponent,
    CreateServiceComponent,
    ListServicesComponent,
    ListOperationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
