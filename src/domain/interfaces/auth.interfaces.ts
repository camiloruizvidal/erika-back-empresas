export interface ILoginTenant {
  correo: string;
  contrasena: string;
}

export interface ILoginRespuesta {
  token: string;
  expiracion: string;
  tenant_id: number;
  usuario_id: number;
}

export interface IPayloadJwt {
  usuario_id: number;
  tenant_id: number;
  correo: string;
}
