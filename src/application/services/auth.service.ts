import { HttpStatus, Injectable } from '@nestjs/common';
import { IAuthService } from '../ports/auth.port';
import {
  ILoginTenant,
  ILoginRespuesta,
  IPayloadJwt,
} from '../../domain/interfaces/auth.interfaces';
import { UserRepository } from '../../infrastructure/persistence/repositories/user.repository';
import { IUserPersistencia } from '../../domain/interfaces/persistence.interfaces';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ErrorPersonalizado } from '../../utils/error-personalizado/error-personalizado';
import { Constantes } from '../../utils/constantes';

const DOCE_HORAS_EN_MILISEGUNDOS = 12 * 60 * 60 * 1000;

@Injectable()
export class AuthService implements IAuthService {
  constructor(private readonly jwtService: JwtService) {}

  public async login(datos: ILoginTenant): Promise<ILoginRespuesta> {
    const usuarioEncontrado = await UserRepository.buscarPorCorreo(
      datos.correo,
    );

    if (!usuarioEncontrado) {
      this.lanzarCredencialesInvalidas();
    }

    const usuario = usuarioEncontrado as IUserPersistencia;

    const contrasenaValida = await bcrypt.compare(
      datos.contrasena,
      usuario.contrasena,
    );

    if (!contrasenaValida) {
      this.lanzarCredencialesInvalidas();
    }

    const payload: IPayloadJwt = {
      usuario_id: usuario.id,
      tenant_id: usuario.tenant_id,
      correo: usuario.correo,
    };

    const token = await this.jwtService.signAsync(payload);
    const expiracion = new Date(Date.now() + DOCE_HORAS_EN_MILISEGUNDOS).toISOString();

    return {
      token,
      expiracion,
      tenant_id: usuario.tenant_id,
      usuario_id: usuario.id,
    };
  }

  private lanzarCredencialesInvalidas(): never {
    throw new ErrorPersonalizado(
      HttpStatus.UNAUTHORIZED,
      Constantes.CREDENCIALES_INVALIDAS,
    );
  }
}
