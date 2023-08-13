import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserService } from 'src/app/data/services/user.service';
import { User } from 'src/app/data/interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  admin = 2;
  userLoged : any ;
  userName : String = "";
  userArea : number = 0;
  userRol : number = 0;

  constructor(private userService : UserService,
              private http: HttpClient,
              private router: Router,  
    ){
  }

  chargeInfo(){
    if(this.userService.getLoggedInUser() != null){
      this.userLoged = this.userService.getLoggedInUser();
      this.userName = this.userLoged.worker.names + ' '+ this.userLoged.worker.surnames;
      this.userArea = this.userLoged.worker.areaId;
      this.userRol = this.userLoged.roleId;
    }
  }

  ngOnInit(){
    this.chargeInfo();
  }

  logout(){
    this.userService.setLoggedInUser(null);
    this.router.navigateByUrl('/login');
  }
}
