import { TenantPlanModel } from '../models/tenant-plan.model';
import { ITenantPlanPersistencia } from '../../../domain/interfaces/persistence.interfaces';
import { Transformador } from '../../utils/transformador.util';

export class TenantPlanRepository {
  private constructor() {}

  public static async crearTenantPlan(
    datos: Partial<ITenantPlanPersistencia>,
  ): Promise<ITenantPlanPersistencia> {
    const registro = await TenantPlanModel.create(datos);
    return Transformador.extraerDataValues(registro);
  }
}
