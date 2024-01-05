import { Controller, Post, Body, HttpCode, HttpStatus, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO, RegisterDTO } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('register')
    async register(@Body() registerDTO: RegisterDTO) {
        const user = await this.authService.register(registerDTO);
        return {
            user,
            message: 'User has been created successfully',
        };
    }

    @Post('login')
    @HttpCode(HttpStatus.OK)
    async login(@Body() loginUserDto: LoginDTO) {
        try {
            const token = await this.authService.login(loginUserDto);
            return { token, message: 'User has been logged in successfully' };
        } catch (error) {
            throw new UnauthorizedException('Login failed');
        }
    }
}
