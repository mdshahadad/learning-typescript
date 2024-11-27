{

    // OOP ---- Class

    class Animal {
        // public name: string;
        // public species: string;
        // public sound: string;

        constructor(public name: string, public species: string, public sound: string) {
            // this.name = name;
            // this.species = species;
            // this.sound = sound;
        }

        makeSound() {
            console.log(`The ${this.name} say ${this.sound}`)
        }
    };

    const dog = new Animal('German Dog', 'Dog', 'Gew Gew');
    dog.makeSound();


    // Parameter properties:




}