import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Config } from '../../config/config';
import { TenantModel } from '../models/tenant.model';
import { PlanModel } from '../models/plan.model';
import { TenantPlanModel } from '../models/tenant-plan.model';
import { UserModel } from '../models/user.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: Config.dbDialect,
      host: Config.dbHost,
      port: Config.dbPuerto,
      username: Config.dbUsuario,
      password: Config.dbContrasena,
      database: Config.dbBaseDatos,
      models: [TenantModel, PlanModel, TenantPlanModel, UserModel],
      logging: Config.dbLogging,
      define: {
        underscored: true,
      },
    }),
  ],
})
export class DatabaseModule {}
