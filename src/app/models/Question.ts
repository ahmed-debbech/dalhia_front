import { Answer } from "./Answer";

export class Question {
    id : number;
    points : number;
    number : number;
    text : string;
    answers : Answer[];
}