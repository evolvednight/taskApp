import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  db: any;
  getTasks() {
    return new Promise<any>((resolve, reject) => {
      this.db.collection('/task').snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots)
      })
    })
  }

  constructor(firestore: AngularFirestore) {
    this.db = firestore;
  }
}
