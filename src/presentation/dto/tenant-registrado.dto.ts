import { Expose, Type } from 'class-transformer';

export class TenantRegistradoDetalleDto {
  @Expose()
  nombre!: string;

  @Expose({ name: 'razonSocial' })
  razonSocial!: string;

  @Expose()
  nit!: string;

  @Expose({ name: 'correoContacto' })
  correoContacto!: string;

  @Expose({ name: 'planActivo' })
  planActivo!: string;
}

export class PlanContratadoDto {
  @Expose()
  id!: number;

  @Expose()
  nombre!: string;

  @Expose()
  @Type(() => Date)
  fechaFin!: Date;

  @Expose()
  estado!: string;
}

export class TenantRegistradoDto {
  @Expose({ name: 'tenantId' })
  tenantId!: number;

  @Expose({ name: 'tenant' })
  @Type(() => TenantRegistradoDetalleDto)
  tenant!: TenantRegistradoDetalleDto;

  @Expose({ name: 'planContratado' })
  @Type(() => PlanContratadoDto)
  planContratado!: PlanContratadoDto;
}
