export class CelebrationDetails{
    name: string | null | undefined;
    doj: Date | null | undefined;
    constructor(name: string, doj: Date){
      this.name = name;
      this.doj = doj;
    }
}