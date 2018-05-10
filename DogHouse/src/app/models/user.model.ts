import { Role } from './role.model';
import { Group } from './group.model';
export class User {
    id: any;
    userName: string;
    email: string;
    userRoles: Role[];
    userGroups:Group[];
    profileImage: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
}