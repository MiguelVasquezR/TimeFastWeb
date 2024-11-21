export enum Status {
  pending = "Pendiente",
  inTransit = "En tránsito",
  arrested = "Detenido",
  delivered = "Entregado",
  canceled = "Cancelado",
}

export interface StatusByID {
  [id: string]: Status;
}
