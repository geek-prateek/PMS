export class DsrDetails{
    date: Date | null | undefined;
    timespent: number| null | undefined;
    minute: number | null | undefined;
    pendingHour: number| null | undefined;
    status: string| null | undefined;

    constructor(date: Date, timespent: number, pendingHour: number, status: string){
        this.date = date;
        this.timespent = timespent;
        this.pendingHour = pendingHour;
        this.status = status;
    }
}