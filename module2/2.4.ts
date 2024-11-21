{

    // Generic with Interface
    interface Developer<T, Y = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number
        },
        smartWatch: T,
        bike?: Y;
    }

    type SmartWatch = {
        brand: string;
        model: string;
        display: string;
        heartTrack?: boolean;
        sleepTrack?: boolean;
    }

    const poorDeveloper: Developer<SmartWatch> = {
        name: "Shahadad",
        computer: {
            brand: "AMD",
            model: "14",
            releaseYear: 2020
        },
        smartWatch: {
            brand: 'Redmi',
            model: 'B1',
            display: 'Amoled'
        }  
    }

    interface YamahaBike {
        brand: string;
        engineCapacity: string;
    }

    const richDeveloper: Developer<SmartWatch, YamahaBike> = {
        name: "Hossain",
        computer: {
            brand: "Apple",
            model: "15",
            releaseYear: 2022
        },
        smartWatch: {
            brand: 'Apple',
            model: '10',
            display: 'Amoled',
            heartTrack: true,
            sleepTrack: true
        },
        bike: {
            brand: 'Yamaha',
            engineCapacity: '100cc',
        }
    }

}