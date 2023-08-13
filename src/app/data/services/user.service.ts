import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loggedInUserSubject = new BehaviorSubject<User | null>(null);
  loggedInUser$ = this.loggedInUserSubject.asObservable();

  constructor() { }

  setLoggedInUser(user: User | null) {
    this.loggedInUserSubject.next(user);
  }

  getLoggedInUser(): User | null {
    return this.loggedInUserSubject.getValue();
  }
}
