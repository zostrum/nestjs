import { Injectable } from '@nestjs/common';
import { Record } from 'src/shared/entity/record.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';

@Injectable()
export class RecordsService {
    constructor(
        @InjectRepository(Record)
        private recordsRepository: Repository<Record>
    ) {}

    async getAllRecords(): Promise<Record[]> {
        return await this.recordsRepository.find({ take: 10 });
    }

    async getOneRecord(id: number): Promise<Record> {
        return await this.recordsRepository.findOne({ id: id });
    }

    async getTodayRecords(): Promise<Record[]> {
        const range = this.getTodayRange();
        return await this.recordsRepository.find({ date: Between(range.yesterday, range.today) });
    }

    private getTodayRange(): { yesterday; today } {
        let dateY = new Date();
        dateY.setDate(dateY.getDate() - 1);
        const yesterday = dateY.toISOString().slice(0, 10);
        
        let dateT = new Date();
        dateT.setDate(dateT.getDate());
        const today = dateT.toISOString().slice(0, 10);

        return { yesterday, today };
    }
}
