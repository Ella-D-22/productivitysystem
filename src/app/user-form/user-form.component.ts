import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  user: User = new User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) {
      this.user = new User();
         }

  ngOnInit() {
  }

  onSubmit(){
    this.userService.save(this.user).subscribe(result =>
      this.gotoUserList());
  }
  gotoUserList(){
    this.router.navigate(['/users']);
  }
}
