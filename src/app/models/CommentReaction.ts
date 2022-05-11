import { User } from "./user";

export class CommentReaction{
    id : number;
    date : Date;
    reactionType : string;
    user : User;
}