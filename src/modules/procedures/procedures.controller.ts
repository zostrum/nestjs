import { Controller, Get, Req, Post, Body, Param, UsePipes } from '@nestjs/common';
import { ProceduresService } from './procedures.service';
import { Request } from 'express';
// import { CreateProcedureDto } from './dto/create-procedure.dto';
import { Procedure } from './interfaces/procedure.interface';
import { ValidateId } from './pipes/validateId.pipe';

@Controller('/procedures')
export class ProceduresController {
    constructor(private proceduresService: ProceduresService) {}

    // @Post('/')
    // async create(@Body() createProcedureDto: CreateProcedureDto): Promise<Procedure> {
    //     return this.proceduresService.insertProcedures(createProcedureDto);
    // }

    @Get('/')
    /* async */ findAll(): any /* Promise<Procedure[]> */ {
        //return this.proceduresService.getProcedures();
    }

    @Get('/:id')
    @UsePipes(new ValidateId())
    /* async */ findOne(@Param('id') id: number): any /* Promise<Procedure[]> */ {
        //return this.proceduresService.getProcedure(id);
    }
}
