import {
  Table,
  Column,
  DataType,
  Model,
  Default,
  AllowNull,
  Comment,
} from 'sequelize-typescript';

@Table({
  tableName: 'tenant_planes',
  timestamps: true,
  paranoid: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at',
})
export class TenantPlanModel extends Model {
  @Column({
    type: DataType.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @Comment(
    'Relación con tenants. FK se agrega en migración separada para garantizar orden de creación.',
  )
  @AllowNull(false)
  @Column({ type: DataType.BIGINT })
  declare tenant_id: number;

  @Comment(
    'Relación con planes. FK se agrega en migración separada para garantizar orden de creación.',
  )
  @Column({ type: DataType.BIGINT })
  declare plan_id: number | null;

  @Default('activa')
  @Column({ type: DataType.STRING(20) })
  declare estado: string;

  @Default(DataType.NOW)
  @Column({ type: DataType.DATE })
  declare fecha_inicio: Date;

  @AllowNull(false)
  @Column({ type: DataType.DATE })
  declare fecha_fin: Date;

  @Column({ type: DataType.STRING(100) })
  declare referencia_pago: string | null;

  @Column({ type: DataType.DECIMAL(12, 2) })
  declare monto_pagado: number | null;

  @Default('COP')
  @Column({ type: DataType.STRING(10) })
  declare moneda: string;

  @Default(true)
  @Column({ type: DataType.BOOLEAN })
  declare renovacion_automatica: boolean;

  @Column({ type: DataType.STRING(150) })
  declare creado_por: string | null;
}
