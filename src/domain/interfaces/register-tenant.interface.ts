export interface IRegistrarTenant {
  nombre: string;
  razonSocial: string;
  nit: string;
  representanteLegal: string;
  tipoIdentificacion: string;
  numeroIdentificacion: string;
  telefonoContacto: string;
  correoContacto: string;
  direccion: string;
  ciudad: string;
  pais?: string;
  sitioWeb?: string;
  planId: number;
  estadoSuscripcion?: string;
  fechaFin: Date;
  referenciaPago?: string;
  montoPagado?: number;
  moneda?: string;
  renovacionAutomatica?: boolean;
  creadoPor?: string;
  contrasena: string;
}

export interface ITenantRegistrado {
  tenantId: number;
  tenant: {
    nombre: string;
    razonSocial: string;
    nit: string;
    correoContacto: string;
    planActivo: string;
  };
  planContratado: {
    id: number;
    nombre: string;
    fechaFin: Date;
    estado: string;
  };
}
