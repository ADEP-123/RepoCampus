function areaTriangulo(base, altura) {
    if (isNaN(base) || base < 0) {
        throw new Error('La base debe ser numerica y mayor que 0');
    }
    if (isNaN(altura) || altura < 0) {
        throw new Error('La altura debe ser numerica y mayor que 0');
    }
    return (base * altura) / 2;
}

try {
    console.log(areaTriangulo(15, 22));
} catch (error) {
    console.log('Ha ocurrido una excepcion. \n', error)
}
