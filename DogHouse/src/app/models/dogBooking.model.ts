import { DogDetail } from './dog.model';
import { Hostel } from './hostel.model';
import { User } from './user.model';
export class Booking {
    id: any;
    user:User;
    hostel:Hostel;
    bDate:Date;
    bTime:string;
    dog: DogDetail;
    checkoutdate: string;
    checkouttime: string;
   
}