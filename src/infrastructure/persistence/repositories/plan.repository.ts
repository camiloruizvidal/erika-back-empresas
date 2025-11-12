import { PlanModel } from '../models/plan.model';
import { IPlanPersistencia } from '../../../domain/interfaces/persistence.interfaces';

export class PlanRepository {
  private constructor() {}

  public static async buscarPorId(
    id: number,
  ): Promise<IPlanPersistencia | null> {
    const plan = await PlanModel.findOne({ where: { id } });
    if (!plan) {
      return null;
    }
    return plan.get({ plain: true }) as IPlanPersistencia;
  }
}
