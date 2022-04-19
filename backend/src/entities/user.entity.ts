import { EncryptionTransformerConfig } from 'src/auth/encryption.config';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import { EncryptionTransformer } from 'typeorm-encrypted';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column({ type: 'text', array: true, default: [] })
  bookmarks: string[];

  @Column({
    type: 'varchar',
    nullable: false,
    transformer: new EncryptionTransformer(EncryptionTransformerConfig),
  })
  password: string;

  @Column({ nullable: true })
  name: string;
}
