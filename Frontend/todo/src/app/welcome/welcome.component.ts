import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  constructor(private route : ActivatedRoute){

  }
  username = ''
  ngOnInit(){
    this.username = this.route.snapshot.params['name']
  }

}
