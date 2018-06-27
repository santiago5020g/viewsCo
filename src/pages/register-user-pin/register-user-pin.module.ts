import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterUserPinPage } from './register-user-pin';

@NgModule({
  declarations: [
    RegisterUserPinPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterUserPinPage),
  ],
})
export class RegisterUserPinPageModule {}
