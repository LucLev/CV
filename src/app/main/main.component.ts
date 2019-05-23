import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('animation1', [      
      transition(':enter', [
        style({ opacity: 0 }),
        animate(300)
      ]),
      
      state('*', style({ opacity: 100 })),
    ])
  ]
})

export class MainComponent implements OnInit {

  skillStatus:number = 0;
  displaySkill(skill:number){
    if(this.skillStatus == skill){
      this.skillStatus = 0;
    }
    else{
      this.skillStatus = skill;
    }
    
  }
  constructor() { }

  ngOnInit() {
  }

}
