import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public ngfAuth: AngularFireAuth) { }

  /**
   * Login
   */

  doGoogleLogin() {
    this.ngfAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  doFaceBookLogin() {
    this.ngfAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }

  doTwitterLogin() {
    this.ngfAuth.auth.signInWithPopup(new auth.TwitterAuthProvider());
  }

  doGitHubLogin() {
    this.ngfAuth.auth.signInWithPopup(new auth.GithubAuthProvider());
  }

  /**
   * Sign Up
   */

  logout() {
    this.ngfAuth.auth.signOut();
  }

  ngOnInit() {
  }

}
