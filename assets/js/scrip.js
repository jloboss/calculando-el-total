/*Declaracion de Variables*/

precio = 400000;
total = 0;
cantidad = 0;

/*Traspaso de infomacion en Span*/
precioSpan = document.querySelector(".precio_base_inicial");
precioSpan.innerHTML = precio;

totalSpan = document.querySelector(".total_a_pagar");
totalSpan.innerHTML = total;

cantidadSpan = document.querySelector(".cantidad_articulos");
cantidadSpan.innerHTML = cantidad;
/*Fin Informacion Span*/

/*Funcion Aumenta Valor*/
function suma_aumenta() {
  cantidad++;
  cantidadSpan.innerHTML = cantidad;

  total = precio * cantidad;
  totalSpan.innerHTML = total;
}
/*Fin Funcion*/

/*Funcion disminuye Valor y valida cantidad negativa*/
function resta_disminuye() {
  if (cantidad >= 1) {
    cantidad--;
    cantidadSpan.innerHTML = cantidad;

    total = precio * cantidad;
    totalSpan.innerHTML = total;
  }
}
/*Fin Funcion*/
