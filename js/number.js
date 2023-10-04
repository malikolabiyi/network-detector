import { prefixes } from "/js/consts/prefixes.js";

class Number { }

export class PhoneNumber extends Number {
    constructor(digits) {
        super();

        this.digits = digits;
    }

    getNetworkProvider() {
        const phoneNumberPrefix = this.digits.slice(0, 4);

        if (prefixes[phoneNumberPrefix]) {
            return prefixes[phoneNumberPrefix];
        } else if (phoneNumber.slice(0, 5) === "07025" || phoneNumber.slice(0, 5) === "07026") { // Tests for 5 prefixes
            return "MTN";
        } else {
            return "";
        }
    }
}