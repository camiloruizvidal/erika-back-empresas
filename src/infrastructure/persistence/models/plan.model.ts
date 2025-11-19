import {
  Table,
  Column,
  DataType,
  Model,
  Default,
  AllowNull,
} from 'sequelize-typescript';

@Table({
  tableName: 'planes',
  timestamps: true,
  paranoid: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at',
})
export class PlanModel extends Model {
  @Column({
    type: DataType.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @AllowNull(false)
  @Column({ type: DataType.STRING(50) })
  declare nombre: string;

  @AllowNull(true)
  @Column({ type: DataType.TEXT })
  declare descripcion?: string;

  @AllowNull(false)
  @Column({ type: DataType.DECIMAL(12, 2) })
  declare precio: number;

  @AllowNull(false)
  @Column({ type: DataType.STRING(20) })
  declare periodo: string;

  @Default(10)
  @Column({ type: DataType.INTEGER })
  declare limite_clientes: number;

  @Default(10)
  @Column({ type: DataType.INTEGER })
  declare limite_servicios: number;

  @Default(100)
  @Column({ type: DataType.INTEGER })
  declare limite_facturas: number;

  @Default(0)
  @Column({ type: DataType.DECIMAL(5, 2) })
  declare comision: number;

  @Default('COP')
  @Column({ type: DataType.STRING(10) })
  declare moneda: string;

  @Default(true)
  @Column({ type: DataType.BOOLEAN })
  declare activo: boolean;
}
