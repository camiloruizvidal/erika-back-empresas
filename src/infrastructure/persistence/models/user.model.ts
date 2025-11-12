import {
  Table,
  Column,
  DataType,
  Model,
  Default,
  AllowNull,
} from 'sequelize-typescript';

@Table({
  tableName: 'users',
  timestamps: true,
  paranoid: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at',
})
export class UserModel extends Model {
  @Column({
    type: DataType.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @AllowNull(false)
  @Column({ type: DataType.BIGINT })
  declare tenant_id: number;

  @AllowNull(false)
  @Column({ type: DataType.STRING(150) })
  declare correo: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING(255) })
  declare contrasena: string;

  @Default(true)
  @Column({ type: DataType.BOOLEAN })
  declare activo: boolean;
}
