import { PlanModel } from '../models/plan.model';
import { IPlanPersistencia } from '../../../domain/interfaces/persistence.interfaces';
import { Transformador } from '../../utils/transformador.util';

export class PlanRepository {
  private constructor() {}

  public static async buscarPorId(
    id: number,
  ): Promise<IPlanPersistencia | null> {
    const plan = await PlanModel.findOne({ where: { id } });
    return Transformador.extraerDataValues(plan);
  }
}
