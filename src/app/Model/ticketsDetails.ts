export class TicketsDetails{
    id: number;
    ticketId: number;
    subject: string;
    description: string;
    status: string;
    constructor(id: number, ticketId: number, subject: string, description: string, status: string){
        this.id = id;
        this.ticketId = ticketId;
        this.subject = subject;
        this.description = description;
        this.status = status;
    }
}