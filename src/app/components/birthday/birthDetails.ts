export class BirthDetails{
    name: string | null | undefined;
    dob: Date | null | undefined;
    constructor(name: string, dob: Date){
      this.name = name;
      this.dob = dob;
    }
}