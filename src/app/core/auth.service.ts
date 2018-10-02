import { Injectable, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {
  private authStateSubscription: Subscription;
  authState: any = null;

  constructor(private ngfAuth: AngularFireAuth) {
    this.authStateSubscription = this.ngfAuth.authState.subscribe((authState: any | null) => {
      this.authState = authState;
    });
  }

  // Return if user is logged
  get isLogged(): boolean {
    return this.authState !== null;
  }

  // Returns an observable with current user info
  currentUser(): Observable<any | null> {
    return this.ngfAuth.authState;
  }

  ngOnDestroy() {
    this.authStateSubscription.unsubscribe();
  }
}
