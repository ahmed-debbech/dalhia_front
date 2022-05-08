import { User } from "./user";

export class Comment{
    id : number;
    text : string;
    datePublished : Date;
    dateRemoved : Date;
    banned : boolean;
    replies : Comment[];
    user : User;
}