export class Review {
    constructor(
        public reviewBody?:string,
        public reviewDate?: Date,
        public reviewHeader?:string,
        public stars?:number,
        public reviewId?:number){}
}
