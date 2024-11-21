const types = {
  pending: false,
  inTransit: false,
  arrested: false,
  delivered: false,
  canceled: false,
};

export const getViewStatus = (estado: string) => {
  switch (estado) {
    case "Pendiente":
      types.pending = true;
      return types;
    case "En tránsito":
      types.pending = true;
      types.inTransit = true;
      return types;
    case "Detenido":
      types.arrested = true;
      return types;
    case "Entregado":
      types.pending = true;
      types.inTransit = true;
      types.delivered = true;
      return types;
    case "Cancelado":
      types.canceled = true;
      return types;
    default:
      return types;
  }
};
