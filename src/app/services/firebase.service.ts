import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  db: any;

  getTasks() {
    return this.db.collection('task').valueChanges()
  }

  getBuyList() {
    return this.db.collection('groceries').valueChanges()
  }
  
  addPurchase(item: string, quantity: number) {
    this.db.collection("groceries").add({
      item: item,
      quantity: quantity,
    })
    .then(function(docRef) {
      console.log("new item added with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error when adding task: ", error);
    });
  }

  addTask(task: string) {
    this.db.collection("task").add({
      description: task,
      status: true,
    })
    .then(function(docRef) {
      console.log("new task added with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error when adding task: ", error);
    });
  }

  constructor(firestore: AngularFirestore) {
    this.db = firestore;
  }
}
