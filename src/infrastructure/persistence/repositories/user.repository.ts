import { UserModel } from '../models/user.model';
import { IUserPersistencia } from '../../../domain/interfaces/persistence.interfaces';

export class UserRepository {
  private constructor() {}

  public static async buscarPorCorreo(
    correo: string,
  ): Promise<IUserPersistencia | null> {
    const registro = await UserModel.findOne({ where: { correo } });
    if (!registro) {
      return null;
    }
    return registro.get({ plain: true }) as IUserPersistencia;
  }

  public static async crearUsuario(
    datos: Partial<IUserPersistencia>,
  ): Promise<IUserPersistencia> {
    const registro = await UserModel.create(datos);
    return registro.get({ plain: true }) as IUserPersistencia;
  }
}
