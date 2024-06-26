export function formatCurrency(precio) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0, // No mostrar decimales para números enteros
    maximumFractionDigits: 0, // No mostrar decimales para números enteros
  }).format(precio);
}

export const capitalizeFirstLetter = (string) => {
  if (string.length === 0) return string;
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const calcularTotalPedido = (pedido) => {
  const precioBase = parseInt(pedido.precio, 10);
  const precioAdicionales = pedido.adicionales.reduce(
    (total, adicional) => total + parseInt(adicional.precio, 10),
    0
  );
  return precioBase + precioAdicionales;
};

export const calcularTotalCarrito = (carrito) => {
  return carrito.reduce(
    (total, pedido) => total + calcularTotalPedido(pedido),
    0
  );
};
