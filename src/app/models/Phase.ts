import { Quiz } from "./Quiz";
import { Resource } from "./Resource";

export class Phase {
    id : number;
    title : string ;
    number : number;
    duration : number;
    dateAdded : Date ;
    finalPhase : number;
    status : number ;
    quiz : Quiz[];
    resources : Resource[];
}