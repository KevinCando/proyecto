import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/data/services/user.service';

import { User } from 'src/app/data/interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  name: string = "";
  pass: string = "";
  message: string = "";

  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService,
  ) {}

  login() {
    let bodyData = {
      name: this.name,
      pass: this.pass
    };

    this.http.post("http://localhost:8080/api/v1/user/login", bodyData).subscribe(
      (resultData: any) => {
        //console.log(resultData);

        if (resultData != null) {
          this.userService.setLoggedInUser(resultData);
          this.router.navigateByUrl('/home');
        } else {
          console.log("Is null");
        }
      },
      (error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.message = "Authentication failed. Invalid credentials.";
          // Puedes realizar aquí acciones adicionales como mostrar un mensaje de error.
        } else {
          this.message = "An error occurred:", error;
        }
      }
    );
  }
}
