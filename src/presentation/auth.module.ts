import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from '../application/services/auth.service';
import { Config } from '../infrastructure/config/config';
import { ManejadorError } from '../utils/manejador-error/manejador-error';
import { JwtTenantGuard } from './guards/jwt-tenant.guard';

@Module({
  imports: [
    JwtModule.register({
      secret: Config.jwtKey,
      signOptions: { expiresIn: '12h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, ManejadorError, JwtTenantGuard],
  exports: [AuthService, JwtTenantGuard],
})
export class AuthModule {}
