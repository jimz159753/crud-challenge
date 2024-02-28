import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Person } from './schemas/person.schema';
import { Model } from 'mongoose';
import * as dayjs from 'dayjs';

@Injectable()
export class PersonService {
  constructor(@InjectModel(Person.name) private personModel: Model<Person>) { }

  async create(createPersonDto: CreatePersonDto) {
    createPersonDto.timestamp = dayjs().format('DD-MM-YYYY hh:mm a');
    createPersonDto.lastUpdate = dayjs().format('DD-MM-YYYY hh:mm a');
    const response = new this.personModel(createPersonDto);
    return await response.save();
  }

  async findAll() {
    return await this.personModel.find().exec();
  }

  async findOne(id: string) {
    const response = await this.personModel.findById(id).exec();
    return response;
  }

  async update(id: string, updatePersonDto: UpdatePersonDto) {
    updatePersonDto.lastUpdate = dayjs().format('DD-MM-YYYY hh:mm a');
    const response = await this.personModel
      .updateOne({ _id: id }, { $set: updatePersonDto })
      .exec();
    return response;
  }

  async remove(id: string) {
    const response = await this.personModel.deleteOne({ _id: id }).exec();
    return response;
  }
}
