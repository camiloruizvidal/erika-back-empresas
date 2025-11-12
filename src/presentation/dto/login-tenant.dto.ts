import { IsEmail, IsString, MinLength } from 'class-validator';
import { Expose } from 'class-transformer';
import { Constantes } from '../../utils/constantes';

export class LoginTenantDto {
  @IsEmail(
    {},
    { message: Constantes.PROPIEDAD_NO_PERMITIDA('correo_contacto') },
  )
  @Expose({ name: 'correo_contacto' })
  correo!: string;

  @IsString({ message: Constantes.PROPIEDAD_NO_PERMITIDA('contrasena') })
  @MinLength(8)
  @Expose({ name: 'contrasena' })
  contrasena!: string;
}
