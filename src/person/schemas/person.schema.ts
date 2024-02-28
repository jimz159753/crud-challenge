import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PersonDocument = HydratedDocument<Person>;

@Schema()
export class Person {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    phone: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    country: string;

    @Prop({ required: true })
    lastUpdate: string;

    @Prop({ required: true })
    timestamp: string;
}

export const PersonSchema = SchemaFactory.createForClass(Person);
