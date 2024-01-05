import { Injectable, Scope } from '@nestjs/common';

import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

import { Users } from "./interfaces/users.interface";
import { CreateUsersDTO } from "./dto/users.dto";


@Injectable(
    { scope: Scope.DEFAULT }
)
export class UsersService {

    constructor(@InjectModel('Users') private readonly UsersModel: Model<Users>) { }

    // Get all Userss
    async getUsers(): Promise<Users[]> {
        const Userss = await this.UsersModel.find();
        return Userss;
    }

    // Get a single Users
    async getUser(usersID: string): Promise<Users> {
        const users = await this.UsersModel.findById(usersID);
        return users;
    }

    async getUserByEmail(email: string): Promise<Users> {
        const user = await this.UsersModel.findOne({ email: email });
        return user;
    }

    // Add a single Users
    async createUser(createUsersDTO: CreateUsersDTO): Promise<Users> {
        const newUsers = new this.UsersModel(createUsersDTO);
        return newUsers.save();
    }

    // Delete User
    async deleteUser(usersID: string): Promise<any> {
        const deletedUsers = await this.UsersModel.findByIdAndDelete({ _id: usersID });
        return deletedUsers;
    }

    // Put a single User
    async updateUser(usersID: string, createUsersDTO: CreateUsersDTO): Promise<Users> {
        const updatedUsers = await this.UsersModel
            .findByIdAndUpdate(usersID, createUsersDTO, { new: true });
        return updatedUsers;
    }

    // Buscar al usuario por nombre de usuario o correo electrónico
    // const user = await this.usersService.findByUsernameOrEmail(email, email);
    async findByUsernameOrEmail(username: string, email: string): Promise<Users> {
        const user = await this.UsersModel.findOne({
            $or: [{ username }, { email }],
        });
        return user;
    }

}
