import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './componentes/login/login.component';
import { loginRoutingModule} from './login-routing.module';



@NgModule({
  declarations: [ LoginComponent],
  imports: [
    CommonModule,
    loginRoutingModule,

  ]
})
export class LoginModule { }
