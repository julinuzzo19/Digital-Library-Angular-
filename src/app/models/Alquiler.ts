export class Alquiler {
  constructor(
    public clienteId: number,
    public isbn: string,
    public fechareserva: Date,
    public fechaalquiler: Date
  ) {}
}
