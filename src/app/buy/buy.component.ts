import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService }from '../services/firebase.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {
  buyList: Observable<any>;

  ngOnInit(): void {
    this.buyList = this.firebaseService.getBuyList();
  }

  constructor(
    public firebaseService: FirebaseService,
    private router: Router
  ) { }
}
