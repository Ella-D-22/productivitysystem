import { FormGroup, FormControl } from '@angular/forms';
import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


// @NgModule({
// //   // declarations: [ ProfileEditorComponent ],
// //   // bootstrap:    [ ProfileEditorComponent],
//    imports: [ RouterModule, CommonModule ],
//   schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
// });


@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    employeeRole: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    userName: new FormControl(''),
  });
  
  constructor() { }

  

    ngOnInit() {}
 onSubmit(){
  if(this.profileForm.valid) {
    console.log("Form.submitted")
  }
  
 }
  }