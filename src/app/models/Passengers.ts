import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('passengers')
class Passengers{

  @PrimaryGeneratedColumn('uuid')
  id:string;

  @Column()
  name:string;

  @Column()
  age:number;

  @Column()
  cpf:number;
}

export default Passengers;