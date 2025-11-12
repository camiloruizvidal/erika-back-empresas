import { LoginTenantDto } from '../../presentation/dto/login-tenant.dto';
import { ILoginTenant } from '../../domain/interfaces/auth.interfaces';

export class LoginTenantMapper {
  private constructor() {}

  public static toInterface(dto: LoginTenantDto): ILoginTenant {
    return {
      correo: dto.correo,
      contrasena: dto.contrasena,
    };
  }
}
