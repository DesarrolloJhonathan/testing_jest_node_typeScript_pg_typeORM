import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar")
  firstname: string;

  @Column("varchar", { nullable: true })
  middlename: string;

  @Column("varchar")
  surname: string;

  @Column("varchar", { nullable: true })
  secondSurname: string;

  @Column("varchar", { unique: true }) //cann't be null
  email: string;
}
