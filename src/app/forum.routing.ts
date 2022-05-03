import { Routes } from "@angular/router";
import { TopicDetailsComponent } from "./topic-details/topic-details.component";
import { TopicComponent } from "./topic/topic.component";

export const ForumRoutes: Routes = [
    { path : 'topics',        component : TopicComponent },
    { path : 'topics/:id',    component : TopicDetailsComponent },
    { path : 'topics/add',    component : TopicDetailsComponent },
];