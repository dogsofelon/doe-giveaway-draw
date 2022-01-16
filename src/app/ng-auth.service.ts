import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class NgAuthService {
  userState: any;

  constructor(public afs: AngularFirestore) {
  }

  getDoeDrawUsers() {
    return this.afs.collection('doe_draw').snapshotChanges();
  }

}
