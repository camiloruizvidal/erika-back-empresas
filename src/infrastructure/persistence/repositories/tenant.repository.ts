import { TenantModel } from '../models/tenant.model';
import { ITenantPersistencia } from '../../../domain/interfaces/persistence.interfaces';
import { Transformador } from '../../utils/transformador.util';

export class TenantRepository {
  private constructor() {}

  public static async buscarPorNit(
    nit: string,
  ): Promise<ITenantPersistencia | null> {
    const registro = await TenantModel.findOne({ where: { nit } });
    return Transformador.extraerDataValues(registro);
  }

  public static async crearTenant(
    datos: Partial<ITenantPersistencia>,
  ): Promise<ITenantPersistencia> {
    const registro = await TenantModel.create(datos);
    return Transformador.extraerDataValues(registro);
  }

  public static async actualizarPlanActivo(
    tenantId: number,
    planActivoId: number,
    planNombreCache: string,
  ): Promise<void> {
    await TenantModel.update(
      {
        plan_activo_id: planActivoId,
        plan_nombre_cache: planNombreCache,
      },
      {
        where: { id: tenantId },
      },
    );
  }
}
