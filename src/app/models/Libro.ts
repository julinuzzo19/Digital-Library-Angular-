export class Libro {
  constructor(
    public isbn: string,
    public titulo: string,
    public autor: string,
    public editorial: string,
    public imagen: string,
    public stock: number
  ) {}
}
