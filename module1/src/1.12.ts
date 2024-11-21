{

    // Nullable type:
    const searchName = (value: string | null) => {
        if (value) {
            console.log('Searching');
        } else {
            console.log("There is nothing to search");
        }
    }

    searchName(null);

    // Unknown type: (typeof)
    const getSpeedMeterPerSecond = (value: unknown) => {
        if (typeof value === 'number') {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms-1`)
        } else if (typeof value === 'string') {
            const valueInNumber = parseFloat(value.split(' ')[0]);
            const convertedSpeed = (valueInNumber * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms-1`);
        } else {
            console.log("Wrong input")
        }

    }
    getSpeedMeterPerSecond(`1000 kmh-1`);

    const throwError = (msg: string) : never => {
        throw new Error(msg);
    }

    throwError("Sorry you are getting error")

}