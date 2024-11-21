{

    // Type alias
    type Student = {
        name: string;
        age: number;
        gender: string;
        contactNo?: string;
        address: string;
    }


    const student1: Student = {
        name: 'Shahadad',
        age: 23,
        gender: 'male',
        contactNo: "15744568",
        address: 'Ctg'
    }

    const student2: Student = {
        name: 'Hossain',
        age: 24,
        gender: 'male',
        address: 'Ctg'
    }

    type UserName = string;
    const name: UserName = 'Shahadad';

    type IsAdmin = boolean;
    const isAdmin: IsAdmin = true;


    // Type alias in function:

    type Add = (a: number, b: number) => number;

    const add: Add = (num1, num2) => num1 + num2;

}