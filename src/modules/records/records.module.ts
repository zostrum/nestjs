import { Module, Get } from '@nestjs/common';
import { RecordsController } from './records.controller'

import { RecordsService } from './records.service';
import { Record } from 'src/shared/entity/record.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Record])],
    controllers: [RecordsController],
    providers: [RecordsService]
})
export class RecordsModule {}
