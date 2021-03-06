import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinColumn, CreateDateColumn, ManyToOne } from 'typeorm';

import Category from './Category';
@Entity('transations')
class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  type: 'income' | 'outcome';

  @Column('decimal')
  value: number;

  @Column()
  category_id: string;

  @ManyToOne(() => Category)
  @JoinColumn({name: 'category_id'})
  category: Category;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}

export default Transaction;
