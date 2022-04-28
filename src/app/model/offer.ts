export class Offer {
    constructor(
    
    private title: string,
    private description: string,
    private  address: string,
    private  email: string,
    private  Level:number,
    private  startDate: Date,
    private endDate: Date,
    private jobType:string,
    public categoryId:number,
    ) { }
  }