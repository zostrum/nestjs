import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Patient } from './patient.entity';

@Entity({ name: 'records' })
export class Record {
    constructor(
        patient_id: number,
        provider_id: number,
        amount: number,
        status: number,
        isBilledToEns: number,
        notes: string,
        date: string,
        procedure_id: number
    ) {
        this.patient_id = patient_id;
        this.provider_id = provider_id;
        this.amount = amount;
        this.status = status;
        this.isBilledToEns = isBilledToEns;
        this.notes = notes;
        this.date = date;
        this.procedure_id = procedure_id;
    }

    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id?: number;

    @Column('int', { name: 'patient_id' })
    public patient_id!: number;

    @Column('int', { name: 'provider_id' })
    public provider_id!: number;

    @Column('int', { name: 'amount' })
    public amount: number;

    @Column('tinyint', { name: 'status' })
    public status: number;

    @Column('tinyint', { name: 'isBilledToEns' })
    public isBilledToEns: number;

    @Column('text', { name: 'notes' })
    public notes: string;

    @Column('timestamp', { name: 'date' })
    public date: string;

    @Column('int', { name: 'procedure_id' })
    public procedure_id!: number;
}
