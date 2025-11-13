import { RegisterTenantRequestDto } from '../../presentation/dto/register-tenant.request.dto';
import { IRegistrarTenant } from '../../domain/interfaces/register-tenant.interface';

export class RegisterTenantMapper {
  private constructor() {}

  public static toInterface(
    dto: RegisterTenantRequestDto,
  ): IRegistrarTenant {
    return {
      nombre: dto.nombre,
      razonSocial: dto.razonSocial,
      nit: dto.nit,
      representanteLegal: dto.representanteLegal,
      tipoIdentificacion: dto.tipoIdentificacion,
      numeroIdentificacion: dto.numeroIdentificacion,
      telefonoContacto: dto.telefonoContacto,
      correoContacto: dto.correoContacto,
      direccion: dto.direccion,
      ciudad: dto.ciudad,
      pais: dto.pais,
      sitioWeb: dto.sitioWeb,
      planId: dto.planId,
      estadoSuscripcion: dto.estadoSuscripcion,
      fechaFin: dto.fechaFin,
      referenciaPago: dto.referenciaPago,
      montoPagado: dto.montoPagado,
      moneda: dto.moneda,
      renovacionAutomatica: dto.renovacionAutomatica,
      contrasena: dto.contrasena,
    };
  }
}
