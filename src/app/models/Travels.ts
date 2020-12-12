import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('travels')
class Travels{

  @PrimaryGeneratedColumn('uuid')
  id:string;

  @Column()
  id_bus:number;

  @Column()
  id_passengers:number;
}

export default Travels;