export interface ILoginTenant {
  correo: string;
  contrasena: string;
}

export interface ILoginRespuesta {
  token: string;
}

export interface IPayloadJwt {
  usuario_id: number;
  tenant_id: number;
  correo: string;
}
