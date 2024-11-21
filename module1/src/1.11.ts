{

    // Ternary Operator || Optional Chaining || Nullish Coalescing operator

    const age: number = 25;

    if (age >= 18) {
        console.log('adult');
    } else {
        console.log('not adult');
    }

    // Ternary Operator:
    const isAdult = age >= 18 ? 'adult' : 'not adult';
    console.log({ isAdult });


    // Nullish Operator: Use only for null or Undefined ----> decision making

    const isAuthenticated = null;
    const result1 = isAuthenticated ?? "Guest";

    console.log({ result1 });

    // Optional Chaining:
    type User = {
        name: string;
        address: {
            city: string;
            roadNo: string;
            presentAddress: string;
            permanentAddress?: string;
        }
    }

    const user: User = {
        name: 'shahadad',
        address: {
            city: 'ctg',
            roadNo: 'wasa',
            presentAddress: 'patiya ctg',
            // permanentAddress: 'ctg town'
        }
    }

    const permanentAddress = user?.address?.permanentAddress ?? 'No Permanent Address';
    console.log({ permanentAddress });


}