export class WorkDetails{
    userId: number | null | undefined;
    companyName: string | null | undefined;
    jobTitle: string | null | undefined;
    from: Date | null | undefined;
    to: Date | null | undefined;
    constructor(userId: number,companyName: string, jobTitle: string, from: Date, to: Date){
        this.userId = userId;
        this.companyName = companyName;
        this.jobTitle = jobTitle;
        this.from = from;
        this.to = to;
    }
}