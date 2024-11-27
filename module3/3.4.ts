{

    class Animal {
        name: string;
        species: string;

        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }

        makeSound() {
            console.log(`${this.name} making sound`);
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        }

        makeBarking() {
            console.log(`${this.name} is barking`);
        }
    };


    class Cat extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        }

        makeMeaw() {
            console.log(`${this.name} is meawing`);
        }
    };

    // Handle in more smart way:

    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog;
    };

    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat;
    };


    const getAnimal = (animal: Animal) => {
        if (isDog(animal)) {
            animal.makeBarking();
        } else if (isCat(animal)) {
            animal.makeMeaw();
        } else {
            animal.makeSound()
        }
    }


    const dog = new Dog("Bideshi Dog", "Dog");
    const cat = new Cat("Bideshi cat", "cat");

    getAnimal(dog);



}