//Los atributos estaticos son miembros de una clase que son compartidos por todas las instancias de esa clasee y no depende de ninguna instancia en particular.
class MiMath {
  static cuadrado(number) {
    return number * number;
  }
}
MiMath.cuadrado(5);

