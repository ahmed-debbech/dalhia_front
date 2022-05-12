export class Subscriptions {
    constructor(date_debut : Date,
        date_fin : Date,
        userId? : string,
        planId? : string,
        subscriptionId? : string) {
            this.date_debut = date_debut
            this.date_fin= date_fin
            this.userId = userId
            this.planId = planId
            this.subscriptionId=subscriptionId
        }

    
    date_debut : Date
    date_fin : Date
    userId? : string
    planId? : string
    subscriptionId? : string

}