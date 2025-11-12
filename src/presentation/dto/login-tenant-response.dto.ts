import { Expose } from 'class-transformer';

export class LoginTenantResponseDto {
  @Expose()
  token!: string;

  @Expose({ name: 'expiracion_token' })
  expiracion!: string;

  @Expose({ name: 'tenant_id' })
  tenant_id!: number;

  @Expose({ name: 'usuario_id' })
  usuario_id!: number;
}
