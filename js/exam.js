"use strict";
class ProtectoraException extends BaseException {
  constructor(message = "Error: Protectora Exception.", fileName, lineNumber) {
    super(message, fileName, lineNumber);
    this.name = "ProtectoraException";
  }
}

const ProtectoraArray = (function () {
  class Protectora {
    #animals;

    #findAnimalPosition(animal) {
      return this.#animals.findIndex((storedAnimal) => {
        return storedAnimal.foto === animal.foto;
      });
    }

    constructor() {
      this.#animals = [];
    }

    get animals() {
      return this.animals[Symbol.iterator]();
    }

    addAnimal(...animals) {
      // Se debe utiliar una función arrow para mantener el contexto de this
      animals.forEach((animal) => {
        if (animal instanceof Animal) {
          if (this.#findAnimalPosition(animal) === -1) {
            this.#animals.push(animal);
          } else {
            throw new ProtectoraException(
              "Error: El animal ya está registrado en la protectora."
            );
          }
        } else {
          throw new ProtectoraException(
            "Error: El animal no es de la clase Animal."
          );
        }
      });
      return this;
    }

    //Devuelve un iterador con los animales de una clase determinada de objeto.
    //Hay que marcar las excepciones el tipo de clase no existe.
    *getAnimals(condition = () => true) {
      for (let animal of this.#animals) {
        if (condition(animal)) {
          yield animal;
        }
      }
    }

    //find. Devuelve un iterador los animales que cumplen los criterios de la función de callback
    find(condition = () => true) {
      for (let animal of this.#animals) {
        if (condition(animal)) {
          return animal;
        }
      }
      throw new ProtectoraException("Error: No se ha encontrado el animal.");
    }

    //filter. Devuelve un iterador con los animales que cumpl
    filter(condition = () => true) {
      let result = [];
      for (let animal of this.#animals) {
        if (condition(animal)) {
          result.push(animal);
        }
      }
      return result;
    }

    //removeAnimal(animal)
    removeAnimal(...animals) {
      if (animals.length > 0) {
        for (let animal of animals) {
          let position = this.#findAnimalPosition(animal);
          if (position !== -1) {
            this.#animals.splice(position, 1);
          }
        }
      } else {
        throw new ProtectoraException("Error: No se ha encontrado el animal.");
      }
      return this;
    }

    //toString. Devuelve un string con la información de los animales de la protectora
    toString() {
      let result = "";
      for (let animal of this.#animals) {
        result += animal.toString() + "\n";
      }
      return result;
    }

    // Transformamos Protectora en un iterable
    // Al implementar el método como generador también es un iterador.
    *[Symbol.iterator]() {
      for (let animal of this.#animals) {
        yield animal;
      }
    }
  }

  let instanciated;

  function init() {
    return new Protectora();
  }

  return {
    getInstance: function () {
      if (!instanciated) instanciated = init();
      return instanciated;
    },
  };
})();
