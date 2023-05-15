export class Skills {

  id?: number;
  nombreSkills: string;
  porcentajeSkills: number;

  constructor(  nombreSkills: string, porcentajeSkills: number){
    this.nombreSkills= nombreSkills;
    this.porcentajeSkills = porcentajeSkills;
  }
}
