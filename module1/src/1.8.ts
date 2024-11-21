{

    // destructuring


    const user = {
        id: 124,
        name: {
            firstName: "Md",
            middleName: "Shahadad",
            lastName: "Hossain"
        },
        contactNo: '15146153',
        address: 'Ctg'
    }

    const {
        contactNo,
        name: { middleName }
    } = user;


    const myFriends = ['Rifat', 'Rafi', "Rafiul", 'Muntasir', 'Nayon'];

    const [, , bestFriend, ...rest] = myFriends;

}