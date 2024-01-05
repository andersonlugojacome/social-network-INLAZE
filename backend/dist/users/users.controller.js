"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const users_dto_1 = require("./dto/users.dto");
let UsersController = class UsersController {
    constructor(UsersService) {
        this.UsersService = UsersService;
    }
    createUser(res, createUsersDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.UsersService.createUser(createUsersDTO);
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Users Successfully Created',
                users
            });
        });
    }
    getUserss(res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userss = yield this.UsersService.getUsers();
            return res.status(common_1.HttpStatus.OK).json(userss);
        });
    }
    getUser(res, usersID) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.UsersService.getUser(usersID);
            if (!users)
                throw new common_1.NotFoundException('Users does not exist!');
            return res.status(common_1.HttpStatus.OK).json(users);
        });
    }
    deleteUsers(res, usersID) {
        return __awaiter(this, void 0, void 0, function* () {
            const usersDeleted = yield this.UsersService.deleteUser(usersID);
            if (!usersDeleted)
                throw new common_1.NotFoundException('Users does not exist!');
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Users Deleted Successfully',
                usersDeleted
            });
        });
    }
    updateUsers(res, createUsersDTO, usersID) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedUsers = yield this.UsersService.updateUser(usersID, createUsersDTO);
            if (!updatedUsers)
                throw new common_1.NotFoundException('Users does not exist!');
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Users Updated Successfully',
                updatedUsers
            });
        });
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, users_dto_1.CreateUsersDTO]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createUser", null);
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserss", null);
__decorate([
    (0, common_1.Get)('/:usersID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('usersID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUser", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('UsersID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteUsers", null);
__decorate([
    (0, common_1.Put)('/update'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Query)('UsersID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, users_dto_1.CreateUsersDTO, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUsers", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('Users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map