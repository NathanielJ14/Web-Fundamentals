for (var i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

for (var i = 100; i > 0; i--) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

for (var i = 5; i >= -3.5; i -= .5) {
    if (i == 4 || i == 2.5 || i == 1 || i == -0.5 || i == -2 || i == -3.5) {
        console.log(i);
    }
}



var sum = 0;

for (var i = 0; i <= 100; i++) {
    sum = sum + i;
}
console.log("sum is " + sum);



var product = 1;

for (var i = 1; i <= 12; i++) {
    product = product * i;
}
console.log("The Product is " + product);