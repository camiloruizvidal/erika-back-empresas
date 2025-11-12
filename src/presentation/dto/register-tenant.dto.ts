import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { Expose, Transform } from 'class-transformer';
import { Constantes } from '../../utils/constantes';

type EntradaNumerica = string | number | null | undefined;
type EntradaBooleana = string | number | boolean | null | undefined;

const transformarNumero = (valor: EntradaNumerica): number | undefined => {
  if (valor === undefined || valor === null || valor === '') {
    return undefined;
  }
  return typeof valor === 'number' ? valor : Number(valor);
};

const transformarBooleano = (valor: EntradaBooleana): boolean | undefined => {
  if (valor === undefined || valor === null || valor === '') {
    return undefined;
  }
  if (typeof valor === 'boolean') {
    return valor;
  }
  if (typeof valor === 'number') {
    return valor === 1;
  }
  const valorNormalizado = valor.toString().toLowerCase();
  return valorNormalizado === 'true' || valorNormalizado === '1';
};

export class RegisterTenantDto {
  @IsString({ message: Constantes.PROPIEDAD_NO_PERMITIDA('nombre') })
  @MinLength(2)
  @Expose({ name: 'nombre' })
  nombre!: string;

  @IsString({ message: Constantes.PROPIEDAD_NO_PERMITIDA('razon_social') })
  @Expose({ name: 'razon_social' })
  razonSocial!: string;

  @IsString({ message: Constantes.PROPIEDAD_NO_PERMITIDA('nit') })
  @Expose({ name: 'nit' })
  nit!: string;

  @IsString({
    message: Constantes.PROPIEDAD_NO_PERMITIDA('representante_legal'),
  })
  @Expose({ name: 'representante_legal' })
  representanteLegal!: string;

  @IsString({
    message: Constantes.PROPIEDAD_NO_PERMITIDA('tipo_identificacion'),
  })
  @Expose({ name: 'tipo_identificacion' })
  tipoIdentificacion!: string;

  @IsString({
    message: Constantes.PROPIEDAD_NO_PERMITIDA('numero_identificacion'),
  })
  @Expose({ name: 'numero_identificacion' })
  numeroIdentificacion!: string;

  @IsString({ message: Constantes.PROPIEDAD_NO_PERMITIDA('telefono_contacto') })
  @Expose({ name: 'telefono_contacto' })
  telefonoContacto!: string;

  @IsEmail(
    {},
    { message: Constantes.PROPIEDAD_NO_PERMITIDA('correo_contacto') },
  )
  @Expose({ name: 'correo_contacto' })
  correoContacto!: string;

  @IsString({ message: Constantes.PROPIEDAD_NO_PERMITIDA('direccion') })
  @Expose({ name: 'direccion' })
  direccion!: string;

  @IsString({ message: Constantes.PROPIEDAD_NO_PERMITIDA('ciudad') })
  @Expose({ name: 'ciudad' })
  ciudad!: string;

  @IsOptional()
  @IsString({ message: Constantes.PROPIEDAD_NO_PERMITIDA('pais') })
  @Expose({ name: 'pais' })
  pais?: string;

  @IsOptional()
  @IsString({ message: Constantes.PROPIEDAD_NO_PERMITIDA('sitio_web') })
  @Expose({ name: 'sitio_web' })
  sitioWeb?: string;

  @Transform(({ value }) => transformarNumero(value))
  @IsNumber({}, { message: Constantes.PROPIEDAD_NO_PERMITIDA('plan_id') })
  @Expose({ name: 'plan_id' })
  planId!: number;

  @IsOptional()
  @IsString({ message: Constantes.PROPIEDAD_NO_PERMITIDA('estado') })
  @Expose({ name: 'estado' })
  estadoSuscripcion?: string;

  @IsNotEmpty({ message: Constantes.FECHA_FIN_OBLIGATORIA })
  @Transform(({ value }) => (value ? new Date(value) : value))
  @IsDate({ message: Constantes.FECHA_FIN_OBLIGATORIA })
  @Expose({ name: 'fecha_fin' })
  fechaFin!: Date;

  @IsOptional()
  @IsString({ message: Constantes.PROPIEDAD_NO_PERMITIDA('referencia_pago') })
  @Expose({ name: 'referencia_pago' })
  referenciaPago?: string;

  @IsOptional()
  @Transform(({ value }) => transformarNumero(value))
  @IsNumber({}, { message: Constantes.PROPIEDAD_NO_PERMITIDA('monto_pagado') })
  @Expose({ name: 'monto_pagado' })
  montoPagado?: number;

  @IsOptional()
  @IsString({ message: Constantes.PROPIEDAD_NO_PERMITIDA('moneda') })
  @Expose({ name: 'moneda' })
  moneda?: string;

  @IsOptional()
  @Transform(({ value }) => transformarBooleano(value))
  @IsBoolean({
    message: Constantes.PROPIEDAD_NO_PERMITIDA('renovacion_automatica'),
  })
  @Expose({ name: 'renovacion_automatica' })
  renovacionAutomatica?: boolean;

  @IsOptional()
  @IsString({ message: Constantes.PROPIEDAD_NO_PERMITIDA('creado_por') })
  @Expose({ name: 'creado_por' })
  creadoPor?: string;

  @IsString({ message: Constantes.PROPIEDAD_NO_PERMITIDA('contrasena') })
  @MinLength(8)
  @Expose({ name: 'contrasena' })
  contrasena!: string;
}
