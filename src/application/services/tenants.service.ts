import { Injectable, HttpStatus } from '@nestjs/common';
import { ITenantsService } from '../ports/tenants.port';
import {
  IRegistrarTenant,
  ITenantRegistrado,
} from '../../domain/interfaces/register-tenant.interface';
import { PlanRepository } from '../../infrastructure/persistence/repositories/plan.repository';
import { TenantRepository } from '../../infrastructure/persistence/repositories/tenant.repository';
import { TenantPlanRepository } from '../../infrastructure/persistence/repositories/tenant-plan.repository';
import { ErrorPersonalizado } from '../../utils/error-personalizado/error-personalizado';
import { Constantes } from '../../utils/constantes';
import {
  IPlanPersistencia,
  ITenantPersistencia,
  ITenantPlanPersistencia,
  IUserPersistencia,
} from '../../domain/interfaces/persistence.interfaces';
import { UserRepository } from '../../infrastructure/persistence/repositories/user.repository';
import * as bcrypt from 'bcrypt';
import { Config } from '../../infrastructure/config/config';

@Injectable()
export class TenantsService implements ITenantsService {
  public async registrarTenant(
    payload: IRegistrarTenant,
  ): Promise<ITenantRegistrado> {
    const planSeleccionado: IPlanPersistencia | null =
      await PlanRepository.buscarPorId(payload.planId);

    if (!planSeleccionado || planSeleccionado.activo !== true) {
      throw new ErrorPersonalizado(
        HttpStatus.NOT_FOUND,
        Constantes.PLAN_NO_ENCONTRADO,
      );
    }

    const tenantExistente: ITenantPersistencia | null =
      await TenantRepository.buscarPorNit(payload.nit);
    if (tenantExistente) {
      throw new ErrorPersonalizado(
        HttpStatus.CONFLICT,
        Constantes.TENANT_YA_EXISTE,
      );
    }

    const usuarioExistente: IUserPersistencia | null =
      await UserRepository.buscarPorCorreo(payload.correoContacto);
    if (usuarioExistente) {
      this.lanzarErrorUsuarioExistente();
    }

    const tenantCreado: ITenantPersistencia =
      await TenantRepository.crearTenant({
        nombre: payload.nombre,
        razon_social: payload.razonSocial,
        nit: payload.nit,
        representante_legal: payload.representanteLegal,
        tipo_identificacion: payload.tipoIdentificacion,
        numero_identificacion: payload.numeroIdentificacion,
        telefono_contacto: payload.telefonoContacto,
        correo_contacto: payload.correoContacto,
        direccion: payload.direccion,
        ciudad: payload.ciudad,
        pais: payload.pais ?? 'Colombia',
        sitio_web: payload.sitioWeb ?? null,
        fecha_creacion: new Date(),
        activo: true,
      });

    const contrasenaHasheada = await bcrypt.hash(
      payload.contrasena,
      Config.bcryptSaltRounds,
    );

    await UserRepository.crearUsuario({
      tenant_id: tenantCreado.id,
      correo: payload.correoContacto,
      contrasena: contrasenaHasheada,
      activo: true,
    });

    const tenantPlanRegistrado: ITenantPlanPersistencia =
      await TenantPlanRepository.crearTenantPlan({
        tenant_id: tenantCreado.id,
        plan_id: planSeleccionado.id,
        estado: payload.estadoSuscripcion ?? 'activa',
        fecha_inicio: new Date(),
        fecha_fin: payload.fechaFin,
        referencia_pago: payload.referenciaPago ?? null,
        monto_pagado: payload.montoPagado ?? null,
        moneda: payload.moneda ?? planSeleccionado.moneda ?? 'COP',
        renovacion_automatica: payload.renovacionAutomatica ?? true,
      });

    await TenantRepository.actualizarPlanActivo(
      tenantCreado.id,
      tenantPlanRegistrado.id,
      planSeleccionado.nombre,
    );

    const respuesta: ITenantRegistrado = {
      tenantId: tenantCreado.id,
      tenant: {
        nombre: tenantCreado.nombre,
        razonSocial: tenantCreado.razon_social,
        nit: tenantCreado.nit,
        correoContacto: tenantCreado.correo_contacto,
        planActivo: planSeleccionado.nombre,
      },
      planContratado: {
        id: planSeleccionado.id,
        nombre: planSeleccionado.nombre,
        fechaFin: tenantPlanRegistrado.fecha_fin,
        estado: tenantPlanRegistrado.estado,
      },
    };

    return respuesta;
  }

  private lanzarErrorUsuarioExistente(): never {
    throw new ErrorPersonalizado(
      HttpStatus.CONFLICT,
      Constantes.USUARIO_YA_EXISTE,
    );
  }
}
