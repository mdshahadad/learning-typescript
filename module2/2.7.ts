{
    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }

    type Owner = "bike" | "car" | "ship"; //Manually

    type Owner2 = keyof Vehicle;

    const person: Owner2 = "bike";


    // Using keyOf at Function:

    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key];
    }

    const user = {
        name: 'Shahadad',
        id: 112,
        age: 22,
    }

    const result1 = getPropertyValue(user, "id")
    console.log(result1)

}