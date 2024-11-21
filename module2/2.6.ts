{

    // Constraints:
    const addCourseToStudent = <T extends { id: number, name: string, email: string }>(student: T): T & { course: string } => {
        const course = 'Next Level Web Development';

        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent<{
        id: number;
        name: string;
        email: string;
        devType: string;
    }>({
        id: 122,
        name: 'Shahadad',
        email: 'hello@shahadad.com',
        devType: 'NLWD'
    });

    const student2 = addCourseToStudent<{
        id: number;
        name: string;
        email: string;
        hasWatch: string;
    }>({
        id: 124,
        name: 'Hossain',
        email: 'new@gmail.com',
        hasWatch: "Apple"
    });

    console.log(student1, student2)

}