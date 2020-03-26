import { Injectable } from '@nestjs/common';
import { Patient } from 'src/shared/entity/patient.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';

@Injectable()
export class PatientsService {
    constructor(
        @InjectRepository(Patient)
        private patientsRepository: Repository<Patient>
    ) {}

    async getPatientById(id: number): Promise<Patient> {
        return await this.patientsRepository.findOne({ where: { id: id }, relations: ['state', 'procedures'] });
    }

    async getAllTodayPatients(): Promise<Patient[]> {
        const range = this.getTodayRange();

        return await this.patientsRepository.find({
            join: { alias: 'patients', innerJoin: { records: 'patients.records' } },
            where: qb => {
                qb.where('records.date between :start and :end', { start: range.today, end: range.tomorrow }); // Filter related field
            },
            relations: ['state', 'procedures', 'records', 'records.procedure']
        });
    }

    private getTodayRange(): { today; tomorrow } {
        let dateToday = new Date();
        dateToday.setDate(dateToday.getDate() - 1);
        const today = dateToday.toISOString().slice(0, 10);

        let dateTomorrow = new Date();
        dateTomorrow.setDate(dateTomorrow.getDate());
        const tomorrow = dateTomorrow.toISOString().slice(0, 10);

        return { today, tomorrow };
    }
}
