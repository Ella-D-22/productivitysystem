import { Component, Inject , OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef , MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  
  
employeeForm !:FormGroup;
actionBtn : string = "Save"
  constructor(private formBuilder: FormBuilder,
    private api : ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
     private dialogRef : DialogRef) { }
     
  ngOnInit(): void {
  this.employeeForm = this.formBuilder.group({
    firstName : ['',Validators.required],
    lastName : ['',Validators.required],
    email: ['',Validators.required],
   role : ['',Validators.required],
   designation : ['',Validators.required],
   newPassword : ['',Validators.required],
  })
  if(this.editData){
    this.actionBtn = "Update";
    this.employeeForm.controls['firstName'].setValue(this.editData.firstName);
    this.employeeForm.controls['lastName'].setValue(this.editData.lastName);
    this.employeeForm.controls['email'].setValue(this.editData.email);
    this.employeeForm.controls['role'].setValue(this.editData.role);
    this.employeeForm.controls['designation'].setValue(this.editData.designation);
    this.employeeForm.controls['newPassword'].setValue(this.editData.newPassword);
  }
  }
addEmployee(){
 if(!this.editData){
  if(this.employeeForm.valid){
    this.api.postEmployee(this.employeeForm.value)
    .subscribe({
      next:(res)=>{
        alert("Employee added Successfully!")
        this.employeeForm.reset();
        this.dialogRef.close('save');
      },
      error:()=>{
        alert("Error while adding the employee")
      }
    })
  }
 }else{
  this.updateEmployee()
   }
 }
 updateEmployee(){
  this.api.putEmployee(this.employeeForm.value, this.editData.id)
  .subscribe({
    next:(res)=>{
      alert("Employee updated successfully");
      this.employeeForm.reset();
      this.dialogRef.close('update');
    },
    error:()=>{
      alert("Error while updating the record!!");
    }
  })
 }

 hide = true;
}
