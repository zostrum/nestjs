import { Module, Get } from '@nestjs/common';
import { PatientsController } from './patients.controller';
import { PatientsService } from './patients.service';
import { Patient } from 'src/shared/entity/patient.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Patient])],
    controllers: [PatientsController],
    providers: [PatientsService]
})
export class PatientsModule {}
