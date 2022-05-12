export class CommandsClient  {
    constructor(email : string , name : string , card : number , code : number , products : [{
        title : string,
        quantity : number
    }]) {
        this.email = email
        this.name = name
        this.card = card
        this.code = code
        this.products = products

    }
    email : string
    name : string
    card : number
    code : number
    products : [{
        title : string,
        quantity : number
    }]

}