import { Injectable } from '@nestjs/common';
// import { IProcedure } from './interfaces/procedure.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Procedure } from './procedure.entity';
import { Repository } from 'typeorm';
import { CreateProcedureDto } from './dto/create-procedure.dto';

@Injectable()
export class ProceduresService {
    // async getProcedures(): Promise<{}> {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             console.log('1)Reading from DB...');
    //             // reject(new Error('Oh shit!'));
    //             resolve({
    //                 name: 'Mosh'
    //             });
    //         }, 2000);
    //     });
    // }
    constructor(
        @InjectRepository(Procedure)
        private proceduresRepository: Repository<Procedure>
    ) {}

    getProcedure(id: number): Promise<Procedure[]> {
        return this.proceduresRepository.find({id: id});
    }

    getProcedures(): Promise<Procedure[]> {
        return this.proceduresRepository.find();
    }

    insertProcedures(
        createProcedureDto: CreateProcedureDto
    ): Promise<Procedure> {
        const procedure = new Procedure();
        procedure.name = createProcedureDto.name;
        procedure.code = createProcedureDto.code;
        procedure.price = createProcedureDto.price;

        return this.proceduresRepository.save(procedure);
    }
}
