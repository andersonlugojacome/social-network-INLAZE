import { UsersService } from "./users.service";
import { CreateUsersDTO } from "./dto/users.dto";
export declare class UsersController {
    private UsersService;
    constructor(UsersService: UsersService);
    createUsers(res: any, createUsersDTO: CreateUsersDTO): Promise<any>;
    getUserss(res: any): Promise<any>;
    getUsers(res: any, usersID: any): Promise<any>;
    deleteUsers(res: any, usersID: any): Promise<any>;
    updateUsers(res: any, createUsersDTO: CreateUsersDTO, usersID: any): Promise<any>;
}
