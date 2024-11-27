{

    // access modifiers

    class BankAccount {
        public readonly id: number;
        public name: string;
        private _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        addDeposit(amount: number) {
            this._balance = this._balance + amount;
        }

        getBalance(){
            return this._balance;
        }
    };


    const gorib = new BankAccount(111, "Sazzad", 200)
    gorib.addDeposit(50);
    console.log(gorib.getBalance());


}