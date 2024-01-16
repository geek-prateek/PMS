export class DsrDetails{
    id: number;
    date: Date;
    timespent: number;
    pendingHour: number;

    constructor(id: number, date: Date, timespent: number, pendingHour: number){
        this.id = id;
        this.date = date;
        this.timespent = timespent;
        this.pendingHour = pendingHour;
    }
}