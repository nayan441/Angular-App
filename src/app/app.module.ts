import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {  CreationModule} from './creation/creation.module';

// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
// import { HelperComponent } from './helper/helper.component';

@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    // RegisterComponent,
    // HelperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule,
    BrowserAnimationsModule,
    CreationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
