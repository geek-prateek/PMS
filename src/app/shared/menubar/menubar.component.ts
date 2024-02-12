import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { LocalService } from "src/app/services/localService";

@Component({
    selector: 'app-menubar',
    templateUrl: './menubar.component.html',
    styleUrls: ['./menubar.component.css']
})
export class MenuBarComponent {
    constructor(public router : Router, private route: ActivatedRoute, private authService: AuthService, private localService: LocalService) { }

    title: string = "";
    ngOnInit() {
        this.title = this.localService.title;
    }
    
}