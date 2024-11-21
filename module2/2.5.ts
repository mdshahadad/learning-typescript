{

    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param];
    };

    const resGeneric = createArrayWithGeneric<string>('Name');
    console.log(resGeneric);

    interface User {
        id: number;
        name: string;
    }

    const resGenericObj = createArrayWithGeneric<User>({ id: 12, name: 'Rohid' });


    // Function with generic for tuple:
    const createArrayForTuple = <T, R>(p1: T, p2: R): [T, R] => {
        return [p1, p2];
    }

    const resForTuple = createArrayForTuple<string, number>("Bangladesh", 2);
    const resForTuple2 = createArrayForTuple<string, { continent: string }>("Bangladesh", { continent: 'Asia' });


    const addCourseToStudent = <T>(student: T): T & { course: string } => {
        const course = 'Next Level Web Development';

        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({ name: 'Shahadad', email: 'hello@shahadad.com', devType: 'NLWD' });

    const student2 = addCourseToStudent({ name: 'Hossain', email: 'new@gmail.com', hasWatch: "Apple" });

    console.log(student1)


}