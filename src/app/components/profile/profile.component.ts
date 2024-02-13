import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LocalService } from "../../services/localService";
import { UserService } from "../../services/user.service";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styles: [`
    .bi{
        margin: 10px;
        font-size: 20px;
    }
    a{
        text-decoration: none;
    }
    a:hover{
        color: white;
    }
    button:hover{
        cursor: pointer;
        background-color: black;
    }
    .profile{
        border: 1px solid black;
        ;
        background-color: #f0f0f0;
    }`
    ]
})
export class ProfileComponent implements OnInit{
    

    ngOnInit(): void {
        
    }
}
