import { Expose } from 'class-transformer';

export class LoginTenantResponseDto {
  @Expose()
  token!: string;
}
