import { Expose } from 'class-transformer';

export class TenantRegistradoDetalleResponseDto {
  @Expose()
  nombre!: string;

  @Expose({ name: 'razonSocial' })
  razon_social!: string;

  @Expose()
  nit!: string;

  @Expose({ name: 'correoContacto' })
  correo_contacto!: string;

  @Expose({ name: 'planActivo' })
  plan_activo!: string;
}

