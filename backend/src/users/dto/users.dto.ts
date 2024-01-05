import { IsString, IsEmail, IsNotEmpty, IsOptional, IsDate } from 'class-validator';

export class CreateUsersDTO {
    @IsString()
    @IsNotEmpty()
    readonly fullName: string;

    @IsOptional()
    @IsNotEmpty()
    readonly age?: number;

    @IsEmail()
    @IsNotEmpty()
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    readonly password: string;

    readonly posts: any[]; // Relación con los posts del usuario

    @IsDate()
    readonly createdAt: Date;

    @IsDate()
    readonly updatedAt: Date;

    @IsOptional()
    @IsDate()
    readonly deletedAt?: Date;
}
