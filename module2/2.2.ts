{

    // Interface:
    interface User {
        name: string;
        age: number;
    }

    interface UserWithRoll2 extends User {
        role: string;
    }

    const user1: UserWithRoll2 = {
        name: 'shahadad',
        age: 19,
        role: 'manager'
    }


    // Interface at Array:
    interface Roll2 {
        [index: number]: number
    }

    const rollNumber: Roll2 = [1, 2, 3];



    // Interface at Functions
    interface Add {
        (num1: number, num2: number): number
    }

    const add: Add = (num1, num2) => num1 + num2;


}