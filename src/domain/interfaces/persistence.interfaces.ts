export interface IPlanPersistencia {
  id: number;
  nombre: string;
  descripcion: string | null;
  precio: number;
  periodo: string;
  limite_clientes: number;
  limite_servicios: number;
  limite_facturas: number;
  comision: number;
  moneda: string;
  activo: boolean;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date | null;
}

export interface ITenantPersistencia {
  id: number;
  nombre: string;
  razon_social: string;
  nit: string;
  representante_legal: string;
  tipo_identificacion: string;
  numero_identificacion: string;
  telefono_contacto: string;
  correo_contacto: string;
  direccion: string;
  ciudad: string;
  pais: string;
  sitio_web: string | null;
  plan_activo_id: number | null;
  plan_nombre_cache: string | null;
  activo: boolean;
  fecha_creacion: Date;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date | null;
}

export interface ITenantPlanPersistencia {
  id: number;
  tenant_id: number;
  plan_id: number | null;
  estado: string;
  fecha_inicio: Date;
  fecha_fin: Date;
  referencia_pago: string | null;
  monto_pagado: number | null;
  moneda: string;
  renovacion_automatica: boolean;
  creado_por: string | null;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date | null;
}

export interface IUserPersistencia {
  id: number;
  tenant_id: number;
  correo: string;
  contrasena: string;
  activo: boolean;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date | null;
}
