import { Routes } from "@angular/router";
import { AddTopicComponent } from "./add-topic/add-topic.component";
import { ForumNewsFeedComponent } from "./forum-news-feed/forum-news-feed.component";
import { TopicDetailsComponent } from "./topic-details/topic-details.component";
import { TopicComponent } from "./topic/topic.component";

export const AdminForumRoutes: Routes = [
    { path : 'topics',        component : TopicComponent },
    { path : 'topics/:id',    component : TopicDetailsComponent },
    { path : 'topicsadd',    component : AddTopicComponent },
];
export const ClientForumRoutes: Routes = [
    { path : 'feed/add',    component : AddTopicComponent },
    { path : 'feed',    component : ForumNewsFeedComponent },
]