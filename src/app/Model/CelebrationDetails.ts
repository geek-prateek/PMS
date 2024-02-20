export class CelebrationDetails{
    name: string | null | undefined;
    doj: string | null | undefined;
    constructor(name: string, doj: string){
      this.name = name;
      this.doj = doj;
    }
}