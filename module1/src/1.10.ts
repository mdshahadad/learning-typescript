{

    // Union types: (Literal types)
    type FrontEndDeveloper = 'fakibazzDeveloper' | 'JuniorDeveloper';
    type FullStackDeveloper = 'frontEndDeveloper' | 'ExpertDeveloper';

    type Developer = FrontEndDeveloper | FullStackDeveloper;

    const newDev: Developer = "ExpertDeveloper";
    // const newDeveloper: FrontEndDeveloper = 'JuniorDeveloper';


    type FrontEndDev = {
        skills: string[];
        designation1: 'FrontEnd Developer';
    }

    type BackEndDev = {
        skills: string[];
        designation2: 'BackEnd Developer';
    }

    type FullStackDev = FrontEndDev & BackEndDev;

    const fullStackDev: FullStackDev = {
        skills: ['HTML', 'CSS', "JS", "Express"],
        designation1: 'FrontEnd Developer',
        designation2: 'BackEnd Developer'
    }

}