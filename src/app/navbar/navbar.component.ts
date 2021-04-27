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

    ngAfterViewInit() {
        this.copierElementsMenuHorizontal();
    }

    copierElementsMenuHorizontal(): void {
        const menuHorizontal = document.querySelector("#menu-horizontal");
        const menuHorizontalClone = menuHorizontal.cloneNode(true);
        const menuHorizontalLength = menuHorizontalClone.childNodes.length;
        const menuMobile = document.querySelector("#menu-mobile");

        for (let i = 0; i < menuHorizontalLength; i++) {
            //Important de garder l'index à 0 car la liste se vide
            menuMobile.appendChild(menuHorizontalClone.childNodes[0]);
        }

    }

    followMe(e: any): void {
        const FOLLOWER: any = document.getElementById('follower');
        const TARGET: any = e.target;

        // Si le follower avait préalablement disparu, il se repositionne sur le bon li
        if(FOLLOWER.style.display != "block") {
            FOLLOWER.style.left = TARGET.offsetLeft + "px";
            FOLLOWER.style.display = "block";
        }

        this.WidthAnimation = setInterval(animateWidth, 5);
        this.PosAnimation = setInterval(animatePos, 4);

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
                FOLLOWER.style.transform = "translateX(" + videGaucheDroite + "px)";
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

    hideFollower(): void {
        const FOLLOWER: any = document.getElementById('follower');
        FOLLOWER.style.display = "none";
    }

    openCloseMenu(): void {
        const menu = document.getElementById("menu-mobile");
        if (menu.style.right == "0%") {
            menu.style.right = "-100%";
        } else {
            menu.style.right = "0%";
        }
    }
}
