import {
  IRegistrarTenant,
  ITenantRegistrado,
} from '../../domain/interfaces/register-tenant.interface';

export interface ITenantsService {
  registrarTenant(payload: IRegistrarTenant): Promise<ITenantRegistrado>;
}
