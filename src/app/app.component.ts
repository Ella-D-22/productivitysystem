import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { ApiService } from './services/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'productivitySystem';

  // displayedColumns: string[] = ['empName', 'category', 'date', 'experience', 'salary', 'description', 'action'];
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'appUserRole', 'designation', 'password', 'action'];

  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(public dialog: MatDialog, private api : ApiService){

  }
  ngOnInit(): void {
    this.getAllEmployees();
    // throw new Error('Method not implemented.');
  }
  addEmployee(){
  this.dialog.open(DialogComponent, {
    width:"35%"
  }).afterClosed().subscribe(val=>{
    if(val=== 'Save'){
      this.getAllEmployees();

    }
  })
  
 }

 getAllEmployees(){
  this.api.get()

    this.api.get()
    .subscribe({
      next : (res)=>{
        // 
        console.log("Emp Details", res);
        
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      // error: (err)=>{
      //   alert("Could not fetch Data");
      // }
    })
    }

    editEmployee(row: any){
      this.dialog.open(DialogComponent,{
        width:'35%',
        data: row
      }).afterClosed().subscribe(val=>{
        if (val==='Update') {
          this.getAllEmployees();
        }
      })
    
    }

  deleteEmployee(id: number) {
      this.api.delete(id)
      .subscribe({
        next: (res) => {
          alert("Employee Deleted Successfuly");
          this.getAllEmployees();
        },
      error: (res)=>{
        alert("Error in Deleting the Record");
        this.getAllEmployees();
      }
      })
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
}
