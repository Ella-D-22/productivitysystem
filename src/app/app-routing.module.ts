import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ProfileEditorComponent } from './admin/profile-editor/profile-editor.component';
import { TestPageComponent } from './admin/test-page/test-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {
    path:'test',
  component:TestPageComponent
},
{path:'profile',
component:ProfileEditorComponent},
{
  path:'login',
component:LoginPageComponent
},

{
  path:'admin',
component:AdminComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
