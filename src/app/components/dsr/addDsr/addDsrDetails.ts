export class addDsrDetails{
    dsrDate: Date;
    department: string;
    client: string;
    project: string;
    taskType: string;
    hour: number;
    minute: number;
    taskKey: string;
    dueDate: Date;
    dsrDetails: string;
    constructor(dsrDate: Date, department: string, client: string, project: string, taskType: string, hour: number, minute: number, taskKey: string, dueDate: Date, dsrDetails: string){
        this.dsrDate=dsrDate;
        this.department = department;
        this.client = client;
        this.project = project;
        this.taskType = taskType;
        this.hour = hour;
        this.minute = minute;
        this.taskKey = taskKey;
        this.dueDate = dueDate;
        this.dsrDetails = dsrDetails;
    }
}