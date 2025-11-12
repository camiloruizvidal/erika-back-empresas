import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { RegisterTenantDto } from '../dto/register-tenant.dto';
import { TenantsService } from '../../application/services/tenants.service';
import { RegisterTenantMapper } from '../../shared/mappings/register-tenant.mapper';
import { ManejadorError } from '../../utils/manejador-error/manejador-error';
import { TenantRegistradoDto } from '../dto/tenant-registrado.dto';
import { plainToInstance } from 'class-transformer';
import { ITenantRegistrado } from '../../domain/interfaces/register-tenant.interface';

@ApiTags('tenants')
@Controller('api/v1/tenants')
export class TenantsController {
  constructor(
    private readonly tenantsService: TenantsService,
    private readonly manejadorError: ManejadorError,
  ) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  @ApiBody({ type: RegisterTenantDto })
  @ApiCreatedResponse({ type: TenantRegistradoDto })
  public async registrar(
    @Body() dto: RegisterTenantDto,
  ): Promise<TenantRegistradoDto> {
    try {
      const payload = RegisterTenantMapper.toInterface(dto);
      const resultado: ITenantRegistrado =
        await this.tenantsService.registrarTenant(payload);
      return plainToInstance(TenantRegistradoDto, resultado);
    } catch (error) {
      this.manejadorError.resolverErrorApi(error);
      throw error;
    }
  }
}
