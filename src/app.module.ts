import { Module } from '@nestjs/common';
import { DatabaseModule } from './infrastructure/persistence/database/database.module';
import { TenantsModule } from './presentation/tenants.module';

@Module({
  imports: [DatabaseModule, TenantsModule],
})
export class AppModule {}
