export class LeaveDetails{
    employeeName: string | null | undefined;
    startDate: Date | null |undefined;
    endDate: Date | null |undefined;
    leaveCount: number;
    constructor(employeeName: string, startDate: Date, endDate: Date, leaveCount: number){
        this.employeeName = employeeName;
        this.startDate = startDate;
        this.endDate = endDate;
        this.leaveCount = leaveCount;
    }
}