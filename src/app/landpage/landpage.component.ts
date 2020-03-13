import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router';
@Component({
  selector: 'app-landpage',
  templateUrl: './landpage.component.html',
  styleUrls: ['./landpage.component.scss']
})
export class LandpageComponent implements OnInit {
  route: Route;
  constructor(private router : Router) {
     setTimeout(() => {
      //  window.location.href = '/home';
      this.router.navigate(['/home']);
     }, 2500);
    }
    ngOnInit() {
    }
  

}
