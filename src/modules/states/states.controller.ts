import { Controller, Get } from '@nestjs/common';
import { Procedure } from 'src/shared/entity/procedure.entity';

@Controller('/api/states')
export class StatesController {
    // constructor(private proceduresService: ProceduresService) {}

    // @Post('/')
    // async create(@Body() createProcedureDto: CreateProcedureDto): Promise<Procedure> {
    //     return this.proceduresService.insertProcedures(createProcedureDto);
    // }

    @Get('/')
    // async findAll(): Promise<Procedure[]> {
    findAll(): {} {
        return {hello: "world"};
        // return this.proceduresService.getProcedures();
    }

    // @Get('/:id')
    // @UsePipes(new ValidateId())
    // async findOne(@Param('id') id: number): Promise<Procedure[]> {
    //     return this.proceduresService.getProcedure(id);
    // }
}
