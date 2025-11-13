import { LoginTenantRequestDto } from '../../presentation/dto/login-tenant.request.dto';
import { ILoginTenant } from '../../domain/interfaces/auth.interfaces';

export class LoginTenantMapper {
  private constructor() {}

  public static toInterface(dto: LoginTenantRequestDto): ILoginTenant {
    return {
      correo: dto.correo,
      contrasena: dto.contrasena,
    };
  }
}
