function sumaYProducto( numeros ){
    let suma = numeros.reduce((acumulador, num) => acumulador + num, 0);
    let producto = numeros.reduce((acumulador, num) => acumulador * num, 1);
    console.log("suma:", suma);
    console.log("Product:", product);
}

sumaYProducto([1, 2, 3, 4]);//imprime suma 10, producto 24
