{

    // Generic Type:
    const rollNumber: Array<number> = [3, 4, 8, 10];

    const mentors: Array<String> = ["Mr B", "Mr T", "Mr Z", "Mr O"];


    // Reuseable Generic Type:
    type GenericArray<T> = Array<T>;

    const newRoll: GenericArray<number> = [1, 2, 3, 4];


    const user: GenericArray<{ name: string; age: number }> = [
        {
            name: 'Shahadad',
            age: 22,
        },
        {
            name: 'erin',
            age: 17,
        }
    ]

    // Generic Tuple:
    type GenericTuple<X, Y> = [X, Y];

    const peoples: GenericTuple<string, string> = ["Me", "My wife"];

    const userWithId: GenericTuple<number, { name: string; email: string }> = [
        1234,
        { name: 'Shahadad', email: 'me@gmail.com' },
    ]

}