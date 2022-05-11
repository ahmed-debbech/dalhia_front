import { Question } from "./Question";

export class Quiz {
    id : number;
    title : string ;
    dateAdded : Date;
    dateRemoved : Date;
    questions : Question[];
}