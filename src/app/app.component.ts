import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'clinicFinder';
  loader:boolean = false;
  loginTrue:boolean = false;
  
  constructor(){}
  ngOnInit(): void {
    this.next();
  }


  async next(){
    await this.delay(3000);
    this.loader = true;
    await this.delay(2500);
    this.loginTrue = true;
  }

  delay(milliseconds: number) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }
}
