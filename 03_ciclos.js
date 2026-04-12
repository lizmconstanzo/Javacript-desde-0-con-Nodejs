// 1.Imprima las tablas de multiplicar del 2 al 12 utilizando la declaración for.

// Pista: anidamiento.

let tablas;

for (let i = 2; i <= 12; i++) {
  tablas = i;
  console.log(`Tabla del ${tablas}`);

  for (let a = 1; a <= 12; a++) {
    console.log(`${tablas} x ${a} = ${tablas * a}`);
  }
}

// 2.Realice el equivalente con la declaración while y do-while

// while

let tabladeMultiplicar = 2;

while (tabladeMultiplicar >= 2 && tabladeMultiplicar <= 12) {
  console.log(`Tabla del ${tabladeMultiplicar}`);
  let multiplicador = 1;

  while (multiplicador <= 12) {
    console.log(
      `${tabladeMultiplicar} x ${multiplicador} = ${tabladeMultiplicar * multiplicador}`,
    );
    multiplicador++;
  }
  tabladeMultiplicar++;
}


// do-while

let producto = 2;

do {
  console.log (`tabla del ${producto}`)
  let factor = 1;

while (factor <= 12) {
  console.log(`${producto} x ${factor} = ${producto * factor}`);
factor++;
}
producto++;
}
while (producto >= 2 && producto <= 12);
