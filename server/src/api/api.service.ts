import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Story } from '../../data/entity/Story';
import { opts } from '../../data/helpers/conn.opts';

@Injectable()
export class ApiService {

  constructor(@InjectEntityManager() private readonly storiesMan: Repository<Story>) {
    console.log('Instantiated ApiService...');
  }

  async all(): Promise<Story[]> {
    try {
      return await this.storiesMan.find();
    }
    catch (e) {
      console.error(e);
    }
  }

  async byDate(date: Date) {
    try {

      // if (!(date instanceof Date))
      //   date = new Date(date);

      let eventsForDate = this.storiesMan
        .find({
          where: { created: { getDay: { value: date } } }
        })
      // .createQueryBuilder('story')
      // .addFrom<Story>(Story, 'story')
      // .where('TO_DAYS(NOW()) - TO_DAYS(:date) < 10', { 'date': date })

      return eventsForDate;
    }
    catch (e) {
      console.error(e);
    }
  }
}
