type RegistroSequelize<T> = { toJSON(): T };
type ColeccionSequelize<T> = Array<RegistroSequelize<T>>;
type ResultadoPaginadoSequelize<T> = {
  count: number;
  rows: ColeccionSequelize<T>;
};

type ValorEntrada<T> =
  | ResultadoPaginadoSequelize<T>
  | ColeccionSequelize<T>
  | RegistroSequelize<T>
  | T;
type ValorSalida<T> = { count: number; rows: T[] } | T[] | T;

export class FormatearToJson {
  public static toJson<T>(valor: ValorEntrada<T>): ValorSalida<T> {
    if (FormatearToJson.esResultadoPaginado(valor)) {
      return {
        count: valor.count,
        rows: valor.rows.map((item) => item.toJSON()),
      };
    }

    if (Array.isArray(valor)) {
      return valor.map((item) => item.toJSON());
    }

    if (FormatearToJson.esRegistro(valor)) {
      return valor.toJSON();
    }

    return valor;
  }

  private static esRegistro<T>(
    valor: ValorEntrada<T>,
  ): valor is RegistroSequelize<T> {
    return typeof valor === 'object' && valor !== null && 'toJSON' in valor;
  }

  private static esResultadoPaginado<T>(
    valor: ValorEntrada<T>,
  ): valor is ResultadoPaginadoSequelize<T> {
    return (
      typeof valor === 'object' &&
      valor !== null &&
      'count' in valor &&
      'rows' in valor &&
      Array.isArray(valor.rows)
    );
  }
}
