import { Posts } from "./posts";

/*
campos para el usuario
● User
o FullName
o Age
o Email
o Password
o posts (relación con los posts del usuario)
o createdAt
o updatedAt
o deletedAt


*/
export interface Users {
    _id?: number;
    fullName: string;
    age: number;
    email: string;
    password: string;
    posts?: Posts[];
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}
