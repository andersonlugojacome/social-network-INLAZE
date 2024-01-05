import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { LoginDTO, RegisterDTO } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
    constructor(
        private  usersService: UsersService,
        private readonly jwtService: JwtService
    ) {}
    // async register(registerDTO: RegisterDTO) {
        async register(createUserDto: RegisterDTO) {
            const { fullName, email, password } = createUserDto;
        
            // Verificar si el usuario o el correo electrónico ya existen en la base de datos
            const existingUser = await this.usersService.findByUsernameOrEmail(email, email);
            if (existingUser) {
              throw new UnauthorizedException('El correo electrónico ya están en uso.');
            }
        
            // Hash de la contraseña antes de guardarla en la base de datos
            const hashedPassword = await bcrypt.hash(password, 10);
        
            // Crear el usuario en la base de datos
            const newUser = await this.usersService.createUser({
                fullName,
                email,
                password: hashedPassword,
                posts: [],
                createdAt: undefined,
                updatedAt: undefined
            });
        
            // Se puedes personalizar la respuesta según tus necesidades
            return {
              id: newUser.id,
              fullName: newUser.fullName,
              email: newUser.email,
            };
          }
    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.usersService.getUserByEmail(email);
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
    async login(loginUserDto: LoginDTO) {
        const { email, password } = loginUserDto;
    
        // Buscar al usuario por nombre de usuario o correo electrónico
        const user = await this.usersService.findByUsernameOrEmail(email, email);
    
        if (!user) {
          throw new UnauthorizedException('Credenciales inválidas.');
        }
    
        // Verificar la contraseña
        const isPasswordValid = await bcrypt.compare(password, user.password);
    
        if (!isPasswordValid) {
          throw new UnauthorizedException('Credenciales inválidas.');
        }
    
        // Generar un token JWT
        const payload = { sub: user.id, email: user.email };
        const token = this.jwtService.sign(payload);
    
        return token;
      }
}
