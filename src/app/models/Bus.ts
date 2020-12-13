import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('bus')
class Bus{

  @PrimaryGeneratedColumn('uuid')
  id:string;

  @Column()
  id_user:string;

  @Column()
  vehicle_plate:string;

  @Column()
  year:number;

  @Column()
  model:string;

  @Column()
  seat_amount:string;
}

export default Bus;