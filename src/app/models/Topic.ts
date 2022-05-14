import { User } from "./user";

export class Topic{
    id: number;
    banned: boolean;
    datePublished: Date;
    dateRemoved : string;
    tag : string;
    text : string;
    title : string;
    score : number;
    lastBeTopicOfTheDay : string;
    forumComments: Comment[];
    user : User;
}