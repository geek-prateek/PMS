export class DsrDetails{
    id: number;
    userId: number;
    date: Date | null | undefined;
    timespent: number| null | undefined;
    minute: number | null | undefined;
    pendingHour: number| null | undefined;
    status: string| null | undefined;

    constructor(id: number, userId: number, date: Date, timespent: number, pendingHour: number, status: string){
        this.id = id;
        this.userId = userId;
        this.date = date;
        this.timespent = timespent;
        this.pendingHour = pendingHour;
        this.status = status;
    }
}