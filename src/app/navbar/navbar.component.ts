import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  WidthAnimation: any;
  PosAnimation: any;

  ngOnInit(): void {
  }

  followMe(e: any): void {
      const FOLLOWER: any = document.getElementById('follower');
      const TARGET: any = e.target;

      this.WidthAnimation = setInterval(animateWidth, 5);
      this.PosAnimation = setInterval(animatePos, 5);

      function animateWidth() {
          if (Math.floor(FOLLOWER.clientWidth) == Math.floor(TARGET.clientWidth)) {
              clearInterval(this.WidthAnimation);
          } else {
              let increment: number = 0;
              if (FOLLOWER.clientWidth < TARGET.clientWidth) {
                  increment = 1;
              }
              else if (FOLLOWER.clientWidth > TARGET.clientWidth) {
                  increment = -1;
              }
              FOLLOWER.style.width = FOLLOWER.clientWidth + increment + "px";
              
              //Pour centrer le div sans en affecter sa position
              let videGaucheDroite = (TARGET.clientWidth - FOLLOWER.clientWidth) / 2;
              FOLLOWER.style.transform = "translateX("+ videGaucheDroite + "px)";
          }
      }

      function animatePos() {
          let increment: number = 0;
          if (FOLLOWER.offsetLeft - 5 < TARGET.offsetLeft && FOLLOWER.offsetLeft + 5 > TARGET.offsetLeft) {
              FOLLOWER.style.left = TARGET.offsetLeft + "px";
              clearInterval(this.PosAnimation);
          } else {
              if (FOLLOWER.offsetLeft < TARGET.offsetLeft) {
                  increment = 5;
              }
              else if (FOLLOWER.offsetLeft > TARGET.offsetLeft) {
                  increment = -5;
              }
              FOLLOWER.style.left = FOLLOWER.offsetLeft + increment + "px";
          }
      }
  }

  stopFollowing(e: any): void {
      clearInterval(this.WidthAnimation);
      clearInterval(this.PosAnimation);
  }

  displayFollower(e: any): void {
      const FOLLOWER: any = document.getElementById('follower');
      FOLLOWER.style.display = "block";
      FOLLOWER.style.left = e.clientX + "px";
  }

  hideFollower(): void {
      const FOLLOWER: any = document.getElementById('follower');
      FOLLOWER.style.display = "none";
  }
}