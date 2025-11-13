import { Expose, Type } from 'class-transformer';

export class PlanContratadoResponseDto {
  @Expose()
  id!: number;

  @Expose()
  nombre!: string;

  @Expose({ name: 'fechaFin' })
  @Type(() => Date)
  fecha_fin!: Date;

  @Expose()
  estado!: string;
}

