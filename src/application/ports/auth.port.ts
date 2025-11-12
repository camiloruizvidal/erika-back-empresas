import {
  ILoginTenant,
  ILoginRespuesta,
} from '../../domain/interfaces/auth.interfaces';

export interface IAuthService {
  login(datos: ILoginTenant): Promise<ILoginRespuesta>;
}
