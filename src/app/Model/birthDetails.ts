export class BirthDetails{
    name: string | null | undefined;
    dob: Date = new Date();
    constructor(name: string, dob: Date){
      this.name = name;
      this.dob = dob;
    }
}