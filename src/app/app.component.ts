import { Component, OnInit, inject } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';

  showLoader: boolean = false;

  router: Router = inject(Router);

  // ngOnInit(){
  //   this.router.events.subscribe((event: Event)=>{
  //     if(event instanceof NavigationStart){
  //       this.showLoader = true;
  //     }

  //     if(event instanceof NavigationEnd || event instanceof NavigationCancel){
  //       this.showLoader = false;
  //     }
  //   })
  // }
}
