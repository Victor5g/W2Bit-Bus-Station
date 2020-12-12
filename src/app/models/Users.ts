import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
class Users{

  @PrimaryGeneratedColumn('uuid')
  id:string;
  
  @Column()
  name:string;
  
  @Column()
  image:string;

  @Column()
  state:string;

  @Column()
  city:string;
  
  @Column()
  senha:string;
}
export default Users;