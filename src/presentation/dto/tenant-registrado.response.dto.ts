import { Expose, Type } from 'class-transformer';
import { TenantRegistradoDetalleResponseDto } from './tenant-registrado-detalle.response.dto';
import { PlanContratadoResponseDto } from './plan-contratado.response.dto';

export class TenantRegistradoResponseDto {
  @Expose({ name: 'tenantId' })
  empresa_id!: number;

  @Expose({ name: 'tenant' })
  @Type(() => TenantRegistradoDetalleResponseDto)
  empresa!: TenantRegistradoDetalleResponseDto;

  @Expose({ name: 'planContratado' })
  @Type(() => PlanContratadoResponseDto)
  plan_contratado!: PlanContratadoResponseDto;
}

