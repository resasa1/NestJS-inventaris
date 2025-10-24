/* eslint-disable prettier/prettier */
import { User } from '../../users/entities/user.entity';
import { Category } from '../../category/entities/category.entity';
import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn, 
  CreateDateColumn, 
  UpdateDateColumn, 
  DeleteDateColumn, 
  ManyToOne, 
  JoinColumn 
} from 'typeorm';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'text' })
  description: string;

  @ManyToOne(() => User, (user) => user.item, { eager: true })
  @JoinColumn({ name: 'user_id' }) 
  createdBy: User;


  @ManyToOne(() => Category, (category) => category.item, { eager: true })
  @JoinColumn({ name: 'category_id' }) 
  category: Category;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}