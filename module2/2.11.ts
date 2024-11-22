{

    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string;
    }

    type Name = Pick<Person, "name">
    type NameAge = Pick<Person, "name" | "age">

    // Omit ---------
    type ContactInfo = Omit<Person, "name" | "age">

    // Required-----
    type PersonRequired = Required<Person>;

    // Partial
    type PersonPartial = Partial<Person>

    // Readonly
    type PersonReadonly = Readonly<Person>

    const person1: PersonReadonly = {
        name: "Mr Shahadad",
        age: 2000,
        contactNo: "017"
    }

    // person1.name = 'mr me'


    // Record
    type MyObj = Record<string, string>;

    const EmptyObj: Record<string, unknown> = {}

    const obj1: MyObj = {
        a: 'aa',
        b: "bb",
        c: 'cc',
        d: "dd",
    }

}