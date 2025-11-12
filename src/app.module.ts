import { Module } from '@nestjs/common';
import { DatabaseModule } from './infrastructure/persistence/database/database.module';
import { TenantsModule } from './presentation/tenants.module';
import { AuthModule } from './presentation/auth.module';

@Module({
  imports: [DatabaseModule, AuthModule, TenantsModule],
})
export class AppModule {}
