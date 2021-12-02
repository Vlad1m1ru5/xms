import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Role {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  users: string[];
}
