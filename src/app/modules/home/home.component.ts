import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/data/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router, 
              private userService: UserService
  ) {}

  ngOnInit() {
    if (!this.userService.getLoggedInUser()) {
      this.router.navigateByUrl('/login'); // Redirige a la página de inicio de sesión si no hay usuario logeado
    }
  }
}
