export class Report {
    
    constructor(public category:string,
        public reportBody: string,
        public reportDate: Date,
        public reportId:number,
        public status:string,){}
}
