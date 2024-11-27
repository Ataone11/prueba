export interface User {
  name:string
  username:string
  id:number
  email:string
  phone:number
  address:{ street:string, suite:string, city:string, zipcode:string, geo:{lat:string,ing:string}}
  website: string
  company:{name: string, catchPhrase:string, bs: string}
}