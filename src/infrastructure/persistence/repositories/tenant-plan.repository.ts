import { TenantPlanModel } from '../models/tenant-plan.model';
import { ITenantPlanPersistencia } from '../../../domain/interfaces/persistence.interfaces';

export class TenantPlanRepository {
  private constructor() {}

  public static async crearTenantPlan(
    datos: Partial<ITenantPlanPersistencia>,
  ): Promise<ITenantPlanPersistencia> {
    const registro = await TenantPlanModel.create(datos);
    return registro.get({ plain: true }) as ITenantPlanPersistencia;
  }
}
