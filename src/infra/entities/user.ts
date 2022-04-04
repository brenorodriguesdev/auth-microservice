import { Column, PrimaryGeneratedColumn } from 'typeorm'
import { User } from '../../data/entities/user'

export class UserEntity implements User {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  email: string

  @Column()
  password: string
}
