import { Injectable } from '@nestjs/common';
import { Patient } from 'src/shared/entity/patient.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PatientsService {
    constructor(
        @InjectRepository(Patient)
        private patientsRepository: Repository<Patient>
    ) {}

    async getPatientById(id: number): Promise<Patient> {
        return await this.patientsRepository.findOne({ relations: ['state', 'procedures'] });
    }
}
