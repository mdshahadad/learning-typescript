{
    // Function

    function add(num1: number, num2: number): number {
        return num1 + num2;
    }

    add(2, 4);

    const add1 = (num3: number, num4: number): number => num3 + num4;

    // Object ----> Function ----> Method
    const userBalance = {
        name: 'Shahadad',
        balance: 1000,
        addBalance(balance: number): number {
            return this.balance + balance;
        }
    }


    const arr: number[] = [1, 2, 3, 4, 5];

    const newArray: number[] = arr.map((elem: number): number => elem * elem);

}