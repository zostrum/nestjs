import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProceduresModule } from './modules/procedures/procedures.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { StatesModule } from './modules/states/states.module';
import { PatientsModule } from './modules/patients/patients.module';
import { RecordsModule } from './modules/records/records.module';

@Module({
    imports: [
        StatesModule,
        RecordsModule,
        ProceduresModule,
        PatientsModule,
        TypeOrmModule.forRoot({ autoLoadEntities: true })
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {
    constructor(private connection: Connection) {}
}
