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

    const getAnimal = (animal: Animal) => {
        if (animal instanceof Dog) {
            animal.makeBarking();
        } else if (animal instanceof Cat) {
            animal.makeMeaw();
        } else {
            animal.makeSound()
        }
    }

    const dog = new Dog("Bideshi Dog", "Dog");
    const cat = new Cat("Bideshi cat", "cat");

    getAnimal(dog);



}