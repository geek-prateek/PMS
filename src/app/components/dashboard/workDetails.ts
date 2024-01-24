export class WorkDetails{
    companyName: string | null | undefined;
    jobTitle: string | null | undefined;
    from: Date | null | undefined;
    to: Date | null | undefined;
    constructor(companyName: string, jobTitle: string, from: Date, to: Date){
        this.companyName = companyName;
        this.jobTitle = jobTitle;
        this.from = from;
        this.to = to;
    }
}