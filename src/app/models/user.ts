export class User {
    id : number;
    userId: string 
        role: string
        first_name: string
        last_name: string
        password?:string
        email: string
        phone: string
        date_birth: Date
        address: string
        city: string
        state: string
        zipCode: number
        start_hour: number
        end_hour: number
        job: string
        speciality: string
        encryptedPaswword: string
        emailVerificationStatus: boolean
        emailVerificationToken: string
        activity: string
        ban: boolean
        courses: any
        courseProgresses: any
        subscriptions: any
        commands: any
        topics: any
        appointmentLists: any
        requests: any
        reviews: any
        reports: any
        donations: any
        participations: any
        certificates: any
        history: any
        event: any
        donation: any
        applications: any
        token? : string
}