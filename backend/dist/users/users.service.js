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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let UsersService = class UsersService {
    constructor(UsersModel) {
        this.UsersModel = UsersModel;
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const Userss = yield this.UsersModel.find();
            return Userss;
        });
    }
    getUser(usersID) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.UsersModel.findById(usersID);
            return users;
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.UsersModel.findOne({ email: email });
            return user;
        });
    }
    createUser(createUsersDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUsers = new this.UsersModel(createUsersDTO);
            return newUsers.save();
        });
    }
    deleteUser(usersID) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedUsers = yield this.UsersModel.findByIdAndDelete({ _id: usersID });
            return deletedUsers;
        });
    }
    updateUser(usersID, createUsersDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedUsers = yield this.UsersModel
                .findByIdAndUpdate(usersID, createUsersDTO, { new: true });
            return updatedUsers;
        });
    }
    findByUsernameOrEmail(username, email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.UsersModel.findOne({
                $or: [{ username }, { email }],
            });
            return user;
        });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.DEFAULT }),
    __param(0, (0, mongoose_2.InjectModel)('Users')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], UsersService);
//# sourceMappingURL=users.service.js.map