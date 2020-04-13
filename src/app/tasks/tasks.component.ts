import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})


export class TasksComponent implements OnInit {
  description: string = '';
  tasks: Observable<any[]>;

  constructor(
    public firebaseService: FirebaseService,
    private router: Router
  ) { }

  public addTask() {
    this.firebaseService.addTask(this.description);
    this.description = '';
    console.log(this.tasks);
  } 

  public turnTaskFalse() {
    //
  }

  ngOnInit(): void {
    this.tasks = this.firebaseService.getTasks();
  }

}
