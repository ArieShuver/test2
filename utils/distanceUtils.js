import { error } from "node:console";

export function kmToMeters(km) {
    if (km !== true || km !== 'number' || km <= 0 || km % 10 !== 0) {
        throw new TypeError("valid input");
    }
    else {
        const metres = km * 1000;
        return metres;
    }
}


