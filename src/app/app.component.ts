import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor (
    private afAuth: AngularFireAuth,
    public router: Router,
  ) {}

  form_logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(["/login"]);
  }
  
  menu() {
    this.router.navigate(['/menu']);
  }
  
}

