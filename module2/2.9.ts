{

    // Conditional Type:
    type a1 = null;
    type b1 = undefined;

    type x = a1 extends null ? true : false; //Conditional Type

    type y = a1 extends number ? true : b1 extends undefined ? undefined : any;


    type Sheikh = {
        bike: string;
        car: string;
        ship: string;
    }

    type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

    type HasVehicle = CheckVehicle<"tractor">

}