export class User {

    constructor(){}
    email: string
    password?:string
    first_name: string
    last_name: string
    phone: string
    city: string
    address: string
    zipCode: number
    date_birth: Date
    state: string
    id : number;
    userId?: string 
        role?: string
        
        start_hour?: number
        end_hour?: number
        job?: string
        speciality?: string
        encryptedPaswword?: string
        emailVerificationStatus?: boolean
        emailVerificationToken?: string
        activity?: string
        ban?: boolean
        courses?: any
        courseProgresses?: any
        subscriptionId?: number
        commands?: any
        topics?: any
        appointmentLists?: any
        requests?: any
        reviews?: any
        reports?: any
        donations?: any
        participations?: any
        certificates?: any
        history?: any
        event?: any
        donation?: any
        applications?: any
        token? : string
}