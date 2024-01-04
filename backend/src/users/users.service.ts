import { Injectable } from '@nestjs/common';

import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

import { Users } from "./interfaces/users.interface";
import { CreateUsersDTO } from "./dto/users.dto";

@Injectable()
export class UsersService {

    constructor(@InjectModel('Users') private readonly UsersModel: Model<Users>) {}

    // Get all Userss
    async getUserss(): Promise<Users[]> {
        const Userss = await this.UsersModel.find();
        return Userss;
    }
    
    // Get a single Users
    async getUsers(usersID: string): Promise<Users> {
        const Users = await this.UsersModel.findById(usersID); 
        return Users;
    }

    // Post a single Users
    async createUsers(createUsersDTO: CreateUsersDTO): Promise<Users> {
        const newUsers = new this.UsersModel(createUsersDTO);
        return newUsers.save();
    }

    // Delete Users
    async deleteUsers(usersID: string): Promise<any> {
        const deletedUsers = await this.UsersModel.findOneAndDelete({ _id: usersID });
        return deletedUsers;
    }

    // Put a single Users
    async updateUsers(usersID: string, createUsersDTO: CreateUsersDTO): Promise<Users> {
        const updatedUsers = await this.UsersModel
                            .findByIdAndUpdate(usersID, createUsersDTO, {new: true});
        return updatedUsers;
    }

}
