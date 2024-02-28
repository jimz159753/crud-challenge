import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IPerson } from "./person.interface";
import { ApiProperty } from "@nestjs/swagger";

export class Person implements IPerson {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        maxLength: 30,
        example: 'Luis Jimenez',
    })
    name: string;

    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({
        maxLength: 30,
        example: 'luis@gmail.com',
    })
    email: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        maxLength: 30,
        example: 'Mexico',
    })
    country: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        maxLength: 10,
        example: '33123456778',
    })
    phone: string;

    @IsNotEmpty()
    @IsString()
    lastUpdate: string;

    @IsNotEmpty()
    @IsString()
    timestamp: string;
}
