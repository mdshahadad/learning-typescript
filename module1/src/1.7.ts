{
    // Spread operator 
    // Rest operator
    // destructuring


    const bro1: string[] = ["Rifat", "Muntasir", "Iftekar"]
    const bro2: string[] = ["sohel", 'abid', 'nayon'];

    bro1.push(...bro2);


    const mentor = {
        typescript: 'Mezba',
        redux: 'Mir',
        dbms: 'Mizan'
    }

    const mentor2 = {
        prisma: "Firoz",
        next: "Tanmoy",
        cloud: "Nahid"
    }

    const mentorList = {
        ...mentor,
        ...mentor2
    }



    // Rest Operator:
    const greetFriends = (...friends: string[]) => {
        // console.log(`Hi ${friend1}, ${friend2}, ${friend3}`)

        friends.forEach((friend: string) => console.log(`Hi ${friend}`));
    }

    greetFriends("Abul", "kabul", "Babul", "Labul");
}