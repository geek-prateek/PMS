import { Component } from "@angular/core";

@Component({
    selector: 'app-card-stats',
    templateUrl: './card-stats.component.html',
    styles: [
        `
        .card-stats .card-body {
            padding: 0.9375rem 20px;
        
        }
        .bi{
            font-size: 2rem;
        
        }
        .icon-big{
            border-radius: 50%;
            padding: 10px;
        }`
    ]
})
export class CardStatsComponent {
    constructor() { }
    ngOnInit() {
    }
}