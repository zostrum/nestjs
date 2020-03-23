import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProceduresModule } from './modules/procedures/procedures.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { StatesModule } from './modules/states/states.module';

@Module({
    imports: [StatesModule, ProceduresModule, TypeOrmModule.forRoot()],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {
    constructor(private connection: Connection) {}
}
