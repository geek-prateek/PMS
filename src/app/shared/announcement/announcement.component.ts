import { Component } from "@angular/core";

@Component({
    selector: 'app-announcement',
    templateUrl: './announcement.component.html',
    styles: [`
    .card-text{
        height: 370px;
        overflow-x: scroll;
        width: 100%;
    }
    .card-text::-webkit-scrollbar{
        display: none;
    }
    .icon{
        font-size: 1rem;
        border-radius: 50%;
        background-color: #6C757D;
    }
    .news-icon{
        margin-right: 10px;
    }
    .icon{
        margin-right: 15px;
        width: 30px;
        height: 30px;
        text-align: center;
        margin-bottom: 10px;
        background-color: #F2F2F2;
    }
    `]

})
export class AnnouncementComponent {
    constructor() { }
    ngOnInit() {
    }
    newsDetails = [
        {
            title: "New Year Party",
            description: "New Year Party will be held on 31st December 2024. All the employees are invited to join the party.",
            date: new Date("12/15/2024"),
            icon: "bi bi-megaphone news-icon"
        },
        {
            title: "Christmas Celebration",
            description: "Christmas Celebration will be held on 25th December 2024. All the employees are invited to join the celebration.",
            date: new Date("12/10/2024"),
            icon: "bi bi-megaphone news-icon"
        },
        {
            title: "Republic Day",
            description: "Republic Day will be celebrated on 26th January 2025. All the employees are invited to join the celebration.",
            date: new Date("12/5/2024"),
            icon: "bi bi-megaphone news-icon"
        },
        {
            title: "Holi Celebration",
            description: "Holi Celebration will be held on 10th March 2025. All the employees are invited to join the celebration.",
            date: new Date("12/1/2024"),
            icon: "bi bi-megaphone news-icon"
        }
    ]
}