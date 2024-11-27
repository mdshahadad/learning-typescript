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


    // Type Guard using in guard

    type NormalUser = {
        name: string;
    }

    type AdminUser = {
        name: string;
        role: 'admin';
    }


    const getUser = (user: NormalUser | AdminUser) => {
        if ('role' in user) {
            console.log(`${user.name} is an ${user.role}`);
        } else {
            console.log(`${user.name} is a normal user`);
        }
    };

    const normalUser: NormalUser = {
        name: 'Mr Normal',
    }

    const adminUser: AdminUser = {
        name: 'Mr Admin',
        role: 'admin',
    }

    getUser(normalUser);




}