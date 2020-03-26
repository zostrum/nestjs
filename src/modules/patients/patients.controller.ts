import { Controller, Get, Param } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { Patient } from 'src/shared/entity/patient.entity';

@Controller('/api/patients')
export class PatientsController {
    constructor(private patientsService: PatientsService) {}

    // @Get('/today')
    // findAll(): any {
    //     return this.patientsService.getAllTodayPatients();
    // }

    // Delay 1 sec
    @Get('/today')
    findAll(): any {
        // return this.patientsService.getAllTodayPatients();
        return new Promise((resolve, reject) => {
            setTimeout(() => {

                resolve(this.patientsService.getAllTodayPatients());
            }, 1000);
        });
    }

    @Get('/:id')
    findOne(@Param('id') id: number): any {
        return this.patientsService.getPatientById(id);
    }

}
