export class LeaveDetails{
    employeeName: string;
    startDate: Date;
    endDate: Date;
    leaveCount: number;
    constructor(employeeName: string, startDate: Date, endDate: Date, leaveCount: number){
        this.employeeName = employeeName;
        this.startDate = startDate;
        this.endDate = endDate;
        this.leaveCount = leaveCount;
    }
}