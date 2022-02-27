console.log('desafio entregable 1');

// Pedir cantidad de productos
// Pedir los precios de los productos
// Validar si el producto tiene descuento si vale más o igual a 200
// Calcular el descuento de acuerdo al precio
// Mostrar el detalle del subtotal, IVA, descuento y total

let productQuantity = prompt ('***TIENDA DE DANI***\nIngrese número de productos comprados para ver detalles del precio total');
let productsWithDiscount = 0;
let subtotal = 0;
let discount = 0;
let res = iteracion(productQuantity);

function iteracion(pr){
    for (let i = 1; i <= productQuantity ; i++ ){
        let productPrice = parseInt(prompt ('Ingrese precio del producto N°' + i));
        subtotal = productPrice + subtotal;
     
        if (productPrice >= 200){
            productsWithDiscount = productsWithDiscount +  1
            alert('Llevas ' + productsWithDiscount + ' con descuento');
            discount = calculateDiscountByPrice(productPrice) + discount;
        }
        else {
            alert('Producto sin descuento, llevas ' + productsWithDiscount + ' con descuento');
        }
    }
    return 
}

const calculateIva = price => price * 0.19;

const calculateTotal = (priceSt, priceD) => priceSt - priceD;

function calculateDiscountByPrice(price){
    let result = price * 0.05
    return result
}

console.log('Descuento del producto ' + discount);

alert ('***DETALLE DE LA COMPRA***\n Subtotal: ' + subtotal + '\n IVA: ' + calculateIva(subtotal) + 
'\n Productos con descuento: ' +productsWithDiscount + '\n Descuento: ' + discount + '\n Total: ' + calculateTotal(subtotal,discount)); 




