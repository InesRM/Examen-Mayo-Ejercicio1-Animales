//Necesitamos crear una jerarquía de clases que modelen la estructura del reino animal
/**
 * La implementación de las clases es la siguiente:
 * Animal, Canino y Felino son clases abstractas
 * De ellas heredan Leon, Tigre y Gato para Felino y Lobo y Perro para Canino
 * Se debe implementar también un método toString que recoja el valor de cada atributo del objeto
 */
Animal = (function () {
  class Animal { //Clase abstracta
    #foto;
    #comida;
    #localizacion;
    #tamano;

    constructor(foto, comida, localizacion, tamano) {
      if (!new.target) throw new InvalidAccessConstructorException(); //Evita que se llame al constructor como una función
      if (new.target === Animal) throw new AbstractClassException("Animal");
      if (foto === "") throw new EmptyValueException("foto");
      if (comida === "") throw new EmptyValueException("comida");
      if (localizacion === "") throw new EmptyValueException("localizacion");
      if (tamano === "") throw new EmptyValueException("tamano");
      this.#foto = foto;
      this.#comida = comida;
      this.#localizacion = localizacion;
      this.#tamano = tamano;
    }

    get foto() {
      return this.#foto;
    }

    get comida() {
      return this.#comida;
    }

    get localizacion() {
      return this.#localizacion;
    }

    get tamano() {
      return this.#tamano;
    }

    toString() {
      return `Foto: ${this.#foto}, Comida: ${this.#comida}, Localización: ${
        this.#localizacion
      }, Tamaño: ${this.#tamano}`;
    }

    hacerRuido() {
      console.log("Haciendo ruido");
    }

    comer() {
      console.log("Comiendo");
    }

    dormir() {
      console.log("Durmiendo");
    }

    rugir() {
      console.log("Rugiendo");
    }
  }
  Object.defineProperty(Animal.prototype, "foto", { enumerable: true });
  Object.defineProperty(Animal.prototype, "comida", { enumerable: true });
  Object.defineProperty(Animal.prototype, "localizacion", { enumerable: true });
  Object.defineProperty(Animal.prototype, "tamano", { enumerable: true });

  return Animal;
})();

class Canino extends Animal {
  constructor(foto, comida, localizacion, tamano) {
    if (!new.target) throw new InvalidAccessConstructorException(); //Evita que se llame al constructor como una función
    if (new.target === Canino) throw new AbstractClassException("Canino");
    super(foto, comida, localizacion, tamano);
  }

  rugir() {
    console.log("Rugiendo Canino");
  }

  toString() {
    return super.toString();
  }
}

class Felino extends Animal {
  constructor(foto, comida, localizacion, tamano) {
    if (!new.target) throw new InvalidAccessConstructorException(); //Evita que se llame al constructor como una función
    if (new.target === Felino) throw new AbstractClassException("Felino");
    super(foto, comida, localizacion, tamano);
  }

  rugir() {
    console.log("Rugiendo Felino");
  }

  toString() {
    return super.toString();
  }
}

class Lobo extends Canino {
  constructor(foto, comida, localizacion, tamano) {
    if (!new.target) throw new InvalidAccessConstructorException(); //Evita que se llame al constructor como una función
    super(foto, comida, localizacion, tamano);
  }

  comer() {
    console.log("Comiendo Lobo");
  }

  hacerRuido() {
    console.log("Haciendo ruido Lobo");
  }

  toString() {
    return super.toString();
  }
}

class Perro extends Canino {
  constructor(foto, comida, localizacion, tamano) {
    if (!new.target) throw new InvalidAccessConstructorException(); //Evita que se llame al constructor como una función
    super(foto, comida, localizacion, tamano);
  }

  comer() {
    console.log("Comiendo Perro");
  }

  hacerRuido() {
    console.log("Haciendo ruido Perro");
  }

  vacunar() {
    console.log("Vacunando Perro");
  }

  sacarPaseo() {
    console.log("Sacando a pasear Perro");
  }

  toString() {
    return super.toString();
  }
}

class Gato extends Felino {
  constructor(foto, comida, localizacion, tamano) {
    if (!new.target) throw new InvalidAccessConstructorException(); //Evita que se llame al constructor como una función
    super(foto, comida, localizacion, tamano);
  }

  comer() {
    console.log("Comiendo Gato");
  }

  hacerRuido() {
    console.log("Haciendo ruido Gato");
  }

  vacunar() {
    console.log("Vacunando Gato");
  }

  toString() {
    return super.toString();
  }
}

class Tigre extends Felino {
  constructor(foto, comida, localizacion, tamano) {
    if (!new.target) throw new InvalidAccessConstructorException(); //Evita que se llame al constructor como una función
    super(foto, comida, localizacion, tamano);
  }

  comer() {
    console.log("Comiendo Tigre");
  }

  hacerRuido() {
    console.log("Haciendo ruido Tigre");
  }

  toString() {
    return super.toString();
  }
}

class Leon extends Felino {
  constructor(foto, comida, localizacion, tamano) {
    if (!new.target) throw new InvalidAccessConstructorException(); //Evita que se llame al constructor como una función
    super(foto, comida, localizacion, tamano);
  }

  comer() {
    console.log("Comiendo Leon");
  }

  hacerRuido() {
    console.log("Haciendo ruido Leon");
  }

  toString() {
    return super.toString();
  }
}




// Path: js/main.js
