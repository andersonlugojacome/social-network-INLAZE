import { Controller, Post, Res, HttpStatus, Body, Get, Param, NotFoundException, Delete, Query, Put } from '@nestjs/common';
import { UsersService } from "./users.service";

import { CreateUsersDTO } from "./dto/users.dto";

@Controller('Users')
export class UsersController {

    constructor(private UsersService: UsersService) { }

    // Add Users: /Users/create
    @Post('/create')
    async createUsers(@Res() res, @Body() createUsersDTO: CreateUsersDTO) {
        const users = await this.UsersService.createUsers(createUsersDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Users Successfully Created',
            users
        });
    }

    // Get Userss /Users
    // @Get('/list')
    @Get('/')
    async getUserss(@Res() res) {
        const userss = await this.UsersService.getUserss();
        return res.status(HttpStatus.OK).json(userss);
    }

    // GET single Users: /Users/5c9d46100e2e5c44c444b2d1
    @Get('/:usersID')
    async getUsers(@Res() res, @Param('usersID') usersID) {
        const users = await this.UsersService.getUsers(usersID);
        if (!users) throw new NotFoundException('Users does not exist!');
        return res.status(HttpStatus.OK).json(users);
    }

    // Delete Users: /delete?UsersID=5c9d45e705ea4843c8d0e8f7
    @Delete('/delete')
    async deleteUsers(@Res() res, @Query('UsersID') usersID) {
        const usersDeleted = await this.UsersService.deleteUsers(usersID);
        if (!usersDeleted) throw new NotFoundException('Users does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Users Deleted Successfully',
            usersDeleted
        });
    }

    // Update Users: /update?UsersID=5c9d45e705ea4843c8d0e8f7
    @Put('/update')
    async updateUsers(@Res() res, @Body() createUsersDTO: CreateUsersDTO, @Query('UsersID') usersID) {
        const updatedUsers = await this.UsersService.updateUsers(usersID, createUsersDTO);
        if (!updatedUsers) throw new NotFoundException('Users does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Users Updated Successfully',
            updatedUsers 
        });
    }

}
