import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { ClientModule } from '../client/client.module';
import { AuthService } from './services/auth.service';
import { LoginPageComponent } from './components/login-page/login-page.component';

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [CommonModule, HttpClientModule, ClientModule, SharedModule],
  providers: [AuthService],
})
export class CoreModule {}
