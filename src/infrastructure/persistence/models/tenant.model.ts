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
  tableName: 'tenants',
  timestamps: true,
  paranoid: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at',
})
export class TenantModel extends Model {
  @Column({
    type: DataType.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @AllowNull(false)
  @Column({ type: DataType.STRING(150) })
  declare nombre: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING(150) })
  declare razon_social: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING(50) })
  declare nit: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING(150) })
  declare representante_legal: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING(20) })
  declare tipo_identificacion: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING(50) })
  declare numero_identificacion: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING(30) })
  declare telefono_contacto: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING(150) })
  declare correo_contacto: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING(255) })
  declare direccion: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING(100) })
  declare ciudad: string;

  @Default('Colombia')
  @Column({ type: DataType.STRING(100) })
  declare pais: string;

  @Column({ type: DataType.STRING(255) })
  declare sitio_web: string | null;

  @Comment(
    'Referencial hacia tenant_planes.plan_id, la FK se agrega posteriormente para respetar el orden de creación.',
  )
  @Column({ type: DataType.BIGINT })
  declare plan_activo_id: number | null;

  @Column({ type: DataType.STRING(50) })
  declare plan_nombre_cache: string | null;

  @Default(true)
  @Column({ type: DataType.BOOLEAN })
  declare activo: boolean;

  @Default(DataType.NOW)
  @Column({ type: DataType.DATE })
  declare fecha_creacion: Date;
}
