import { UserModel } from '../models/user.model';
import { IUserPersistencia } from '../../../domain/interfaces/persistence.interfaces';
import { Transformador } from '../../utils/transformador.util';

export class UserRepository {
  private constructor() {}

  public static async buscarPorCorreo(
    correo: string,
  ): Promise<IUserPersistencia | null> {
    const registro = await UserModel.findOne({ where: { correo } });
    return Transformador.extraerDataValues(registro);
  }

  public static async crearUsuario(
    datos: Partial<IUserPersistencia>,
  ): Promise<IUserPersistencia> {
    const registro = await UserModel.create(datos);
    return Transformador.extraerDataValues(registro);
  }
}
