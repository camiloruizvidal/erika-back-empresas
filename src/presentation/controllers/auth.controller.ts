import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { LoginTenantDto } from '../dto/login-tenant.dto';
import { AuthService } from '../../application/services/auth.service';
import { LoginTenantMapper } from '../../shared/mappings/login-tenant.mapper';
import { ManejadorError } from '../../utils/manejador-error/manejador-error';
import { LoginTenantResponseDto } from '../dto/login-tenant-response.dto';
import { plainToInstance } from 'class-transformer';

@ApiTags('auth')
@Controller('api/v1/auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly manejadorError: ManejadorError,
  ) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: LoginTenantDto })
  @ApiOkResponse({ type: LoginTenantResponseDto })
  public async login(
    @Body() dto: LoginTenantDto,
  ): Promise<LoginTenantResponseDto> {
    try {
      const payload = LoginTenantMapper.toInterface(dto);
      const respuesta = await this.authService.login(payload);
      return plainToInstance(LoginTenantResponseDto, respuesta, {
        excludeExtraneousValues: true,
      });
    } catch (error) {
      this.manejadorError.resolverErrorApi(error);
    }
  }
}
