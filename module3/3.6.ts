{

    // Getter and setter

    class BankAccount {
        public readonly id: number;
        public name: string;
        protected _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        
        set deposit(amount: number) {
            this._balance = this._balance + amount;
        }

        get balance() {
            return this._balance;
        }
    };

    const gorib = new BankAccount(111, "Sazzad", 200)
    gorib.deposit = 100;
    console.log(gorib.balance);


}