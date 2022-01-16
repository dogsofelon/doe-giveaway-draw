import { Component, OnInit } from '@angular/core';
import { NgAuthService } from 'src/app/ng-auth.service';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.css']
})
export class DrawComponent implements OnInit {
  isFlip = true;
  drawWinnerUser:any;

  constructor(public ngAuthService: NgAuthService) { }

  ngOnInit(): void {
    this.refreshUser();
  }

  flipCard() {
    const card = document.querySelector(".card__inner");
    card.classList.toggle('is-flipped');
    this.isFlip = !this.isFlip;
  }

  refreshUser() {
    if(!this.isFlip){
      this.flipCard();
    }    
    const card = document.querySelector(".card__inner");
    card.classList.add('animate')
    setTimeout(function() {
      card.classList.remove('animate')
    }, 3000);
    const userList = [];
    this.ngAuthService.getDoeDrawUsers().subscribe(result => {
      result.forEach((res) => {
        userList.push(res.payload.doc.data())
      });
      this.drawWinnerUser = userList[Math.floor(Math.random() * userList.length)];
    });
    
  }

}
