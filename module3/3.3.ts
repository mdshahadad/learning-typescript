{

    // Type Guard using typeOf

    type Alphanumeric = string | number;

    const add = (p1: Alphanumeric, p2: Alphanumeric): Alphanumeric => {
        if (typeof p1 === 'number' && typeof p2 === 'number') {
            return p1 + p2;
        } else {
            return p1.toString() + p2.toString();
        }
    }

    const result1 = add(2, 3);
    console.log(result1);

}