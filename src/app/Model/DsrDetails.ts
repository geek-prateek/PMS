export class DsrDetails{
    id: number;
    userId: number;
    date: Date | null | undefined;
    timespent: number| null | undefined;
    minute: number | null | undefined;
    pendingHour: number| null | undefined;
    status: string| null | undefined;
    department: string| null | undefined;
    client: string| null | undefined;
    project: string| null | undefined;
    taskType: string| null | undefined;
    dueDate: Date | null | undefined;
    hour: number| null | undefined;
    taskKey: number| null | undefined;
    dsrDetails: string| null | undefined;
    constructor(id: number, userId: number, date: Date, timespent: number, minute: number, pendingHour: number, status: string, department: string, client: string, project: string, taskType: string, hour: number, taskKey: number, dsrDetails: string){
        this.id = id;
        this.userId = userId;
        this.date = date;
        this.timespent = timespent;
        this.minute = minute;
        this.pendingHour = pendingHour;
        this.status = status;
        this.department = department;
        this.client = client;
        this.project = project;
        this.taskType = taskType;
        this.hour = hour;
        this.taskKey = taskKey;
        this.dsrDetails = dsrDetails;
    }
}