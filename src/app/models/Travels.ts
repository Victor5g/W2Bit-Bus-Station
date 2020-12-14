import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('travels')
class Travels{

  @PrimaryGeneratedColumn('uuid')
  id:string;

  @Column()
  id_bus:string;

  @Column()
  id_passengers:string;
}

export default Travels;