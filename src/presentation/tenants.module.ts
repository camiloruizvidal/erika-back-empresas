import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TenantsController } from './controllers/tenants.controller';
import { TenantsService } from '../application/services/tenants.service';
import { ManejadorError } from '../utils/manejador-error/manejador-error';
import { Config } from '../infrastructure/config/config';

@Module({
  imports: [
    JwtModule.register({
      secret: Config.jwtKey,
      signOptions: { expiresIn: '12h' },
    }),
  ],
  controllers: [TenantsController],
  providers: [TenantsService, ManejadorError],
})
export class TenantsModule {}
