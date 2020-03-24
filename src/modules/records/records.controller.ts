import { Controller, Get, Param } from '@nestjs/common';
import { RecordsService } from './records.service';
import { Record } from 'src/shared/entity/record.entity';

@Controller('/api/records')
export class RecordsController {
    constructor(private recordsService: RecordsService) {}

    @Get('/today')
    findTodayRecords(): Promise<Record[]> {
        return this.recordsService.getTodayRecords();
    }

    @Get('/:id')
    findOne(@Param('id') id: number): Promise<Record> {
        return this.recordsService.getOneRecord(id);
    }

    @Get('/')
    findAll(): Promise<Record[]> {
        return this.recordsService.getAllRecords();
    }
}
