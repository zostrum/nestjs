import {
    PipeTransform,
    Injectable,
    ArgumentMetadata,
    BadRequestException
} from '@nestjs/common';

@Injectable()
export class ValidateId implements PipeTransform<number> {
    async transform(value: number, metadata: ArgumentMetadata) {
        const isValid = value > 0;
        if (!isValid) throw new BadRequestException('Invalid ID!');
        return value;
    }
}
