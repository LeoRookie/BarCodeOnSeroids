function sayHello() {
alert ("Hello " + name);

document.getElementById("result").innerHTML = 'Hello, ' 
    + document.getElementById("InputStuff").value + '!';

}

function BarcodeMe () {
    JsBarcode('#barcode', 'Leo!');
}

