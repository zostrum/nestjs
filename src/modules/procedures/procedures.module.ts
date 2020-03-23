import { Module } from '@nestjs/common';
import { ProceduresController } from './procedures.controller';
import { ProceduresService } from './procedures.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Procedure } from '../../shared/entity/procedure.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Procedure])],
    controllers: [ProceduresController],
    providers: [ProceduresService]
})
export class ProceduresModule {}
