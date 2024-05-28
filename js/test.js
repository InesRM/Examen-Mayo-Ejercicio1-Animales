function testObjects(protectora, title) {
  console.log(`########## Inicio testeo: ${title} #############`);
  console.log("########## entidades #############");
  let lobo = new Lobo("lobo", "comidaLobo", "monte", "grande");
  let gato = new Gato("gatito", "comidaGato", "calle", "pequeno");
  let tigre = new Tigre("tigre", "comidaTigre", "sabana", "grande");
  let leon = new Leon("leon", "comidaLeon", "sekva", "grande");
  let perro = new Perro("perro", "comidaPerro", "casa", "pequeno");
  let pipi = new Gato("pipi", "comidaGato", "calle", "pequeno");

  console.log("_______Añadir animales_________");

  try {
    protectora.addAnimal(lobo, gato, tigre, leon, perro).addAnimal(pipi, tigre);
  } catch (e) {
    console.log(e.toString());
  }
  for (let animal of protectora) {
    console.log(animal.toString());
  }

  console.log("_______Iterable_________");
  for (const animal of protectora) {
    console.log("Protectora: ", animal.toString());
  }

  console.log("_______getAnimals_________");

    for (const animal of protectora.getAnimals((a) => a instanceof Gato)) {
      console.log("Gato: ", animal.toString());
    }

    //seleccionar por su tamaño
    console.log("_______getAnimals-Tamaño_________");
    for (const animal of protectora.getAnimals((a) => a.tamano === "grande")) {
      console.log("Grande: ", animal.toString());
    }

    console.log("_______getAnimals-Localizacion_________");
    for (const animal of protectora.getAnimals((a) => a.localizacion === "calle")) {
      console.log("Calle: ", animal.toString());
    }

  console.log("_______find_________");

  console.log(protectora.find((a) => a.foto === "lobo"));
  console.log(protectora.find((a) => a.localizacion === "sabana"))

  try {
    console.log(protectora.find((a) => a.foto === "cocodrilo"));
  } catch (e) {
    console.log(e.toString());
  }

  console.log("_______filter_________");
  for (let animal of protectora.filter((a) => a.tamano === "pequeno")) {
    console.log("Grande: ", animal.toString());
  }
  console.log("_______removeAnimal_________");
  try {
    protectora.removeAnimal(gato, tigre);
  } catch (e) {
    console.log(e.toString());
  }
  for (let animal of protectora) {
    console.log(animal.toString());
  }

  console.log("_______Error Clase Abstracta_________");
  
  try {
    let animal = new Animal("foto", "comida", "localizacion", "tamano");
  }
  catch (e) {
    console.log(e.toString());
  }

  try {
    let animal = new Canino("foto", "comida", "localizacion", "tamano");
  }catch (e) {
    console.log(e.toString());
  }

  try {
    let animal = new Felino("foto", "comida", "localizacion", "tamano");
  }
  catch (e) {
    console.log(e.toString());
  }

  console.log("_______toString_________");
  console.log(protectora.toString());
  console.log(`########## Fin testeo: ${title} #############`);
  console.log("##################################################################");
}
function test() {
  testObjects(ProtectoraArray.getInstance(), "Implementación con array");
  console.log(
    "##################################################################"
  );
  // testObjects(ProtectoraMap.getInstance(), 'Implementación con map');
}

window.onload = test;
