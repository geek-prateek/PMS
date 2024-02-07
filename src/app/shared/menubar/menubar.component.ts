import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "src/app/components/login/auth.service";

@Component({
    selector: 'app-menubar',
    templateUrl: './menubar.component.html',
    styleUrls: ['./menubar.component.css']
})
export class MenuBarComponent {
    constructor(public router : Router, private route: ActivatedRoute, private authService: AuthService) { }
    ngOnInit() {
    }
    
}