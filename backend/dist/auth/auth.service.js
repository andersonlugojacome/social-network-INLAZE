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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../users/users.service");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    register(createUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { fullName, email, password } = createUserDto;
            const existingUser = yield this.usersService.findByUsernameOrEmail(email, email);
            if (existingUser) {
                throw new common_1.UnauthorizedException('El correo electrónico ya están en uso.');
            }
            const hashedPassword = yield bcrypt.hash(password, 10);
            const newUser = yield this.usersService.createUser({
                fullName,
                email,
                password: hashedPassword,
                posts: [],
                createdAt: undefined,
                updatedAt: undefined
            });
            return {
                id: newUser.id,
                fullName: newUser.fullName,
                email: newUser.email,
            };
        });
    }
    validateUser(email, pass) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.usersService.getUserByEmail(email);
            if (user && user.password === pass) {
                const { password } = user, result = __rest(user, ["password"]);
                return result;
            }
            return null;
        });
    }
    login(loginUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = loginUserDto;
            const user = yield this.usersService.findByUsernameOrEmail(email, email);
            if (!user) {
                throw new common_1.UnauthorizedException('Credenciales inválidas.');
            }
            const isPasswordValid = yield bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                throw new common_1.UnauthorizedException('Credenciales inválidas.');
            }
            const payload = { sub: user.id, email: user.email };
            const token = this.jwtService.sign(payload);
            return token;
        });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map