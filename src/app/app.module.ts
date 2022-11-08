import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from './user-service.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { TestPageComponent } from './admin/test-page/test-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SharedComponent } from './shared/shared.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileEditorComponent } from './admin/profile-editor/profile-editor.component';
import {MatCardModule} from '@angular/material/card';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,

    AdminComponent,
     NavbarComponent,
     TestPageComponent,
     LoginPageComponent,
     SharedComponent,
     ProfileEditorComponent,
     UserListComponent,
     UserFormComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
