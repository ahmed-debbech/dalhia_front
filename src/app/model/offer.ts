export class Offer {
    constructor(
    
    public title: string,
    public description: string,
    public  address: string,
    public  email: string,
    public  level:number,
    public  startDate: Date,
    public endDate: Date,
    public jobType:string,
    public jobCategory:any,
    ) { }
  }