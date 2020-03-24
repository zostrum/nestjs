import { Controller, Get, Param } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { Patient } from 'src/shared/entity/patient.entity';

@Controller('/api/patients')

export class PatientsController {
    constructor(private patientsService: PatientsService) {}

    @Get('/:id')
    findAll(@Param('id') id: number): any {
        return this.patientsService.getPatientById(id);
    }
}
