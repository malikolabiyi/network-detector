import { PhoneNumber } from "/js/number.js";

const loadingPage = document.getElementById("loading-page");
const homepage = document.getElementById("homepage");

setTimeout(() => {
    loadingPage.style.display = "none";
    homepage.style.display = "block";
}, 3000);

const form = document.getElementById("detect-form");
const detectBtn = document.getElementById("detect-btn");
const resultContainer = document.getElementById("result-container");

const resultText = document.getElementById("result-text");
const resultImg = document.getElementById("result-img");

const refreshContainer = document.getElementById("refresh-container");

form.onsubmit = (event) => {
    event.preventDefault();

    const firstDigit = document.getElementById("first-digit-input").value;
    const secondDigit = document.getElementById("second-digit-input").value;
    const thirdDigit = document.getElementById("third-digit-input").value;
    const fourthDigit = document.getElementById("fourth-digit-input").value;
    const fifthDigit = document.getElementById("fifth-digit-input").value;
    const sixthDigit = document.getElementById("sixth-digit-input").value;
    const seventhDigit = document.getElementById("seventh-digit-input").value;
    const eighthDigit = document.getElementById("eighth-digit-input").value;
    const ninthDigit = document.getElementById("ninth-digit-input").value;
    const tenthDigit = document.getElementById("tenth-digit-input").value;
    const eleventhDigit = document.getElementById("eleventh-digit-input").value;

    const digits = `${firstDigit}${secondDigit}${thirdDigit}${fourthDigit}${fifthDigit}${sixthDigit}${seventhDigit}${eighthDigit}${ninthDigit}${tenthDigit}${eleventhDigit}`;

    const phoneNumber = new PhoneNumber(digits);

    const result = phoneNumber.getNetworkProvider();

    if (result) {
        resultText.textContent = `The network provider is ${result}`;
        resultText.style.color = "#0E0D0D";

        resultImg.style.display = "inline-block";

        if (result === "9MOBILE") {
            resultImg.src = `/images/nine-mobile-logo.jpg`;
        } else {
            resultImg.src = `/images/${result.toLowerCase()}-logo.jpg`;
        }
    } else {
        resultText.textContent = "The network provider is unknown";
        resultText.style.color = "#ff0000";

        resultImg.style.display = "none";
    }

    detectBtn.style.display = "none";

    resultContainer.style.display = "block";
}

refreshContainer.onclick = () => {
    document.getElementById("first-digit-input").value = "";
    document.getElementById("second-digit-input").value = "";
    document.getElementById("third-digit-input").value = "";
    document.getElementById("fourth-digit-input").value = "";
    document.getElementById("fifth-digit-input").value = "";
    document.getElementById("sixth-digit-input").value = "";
    document.getElementById("seventh-digit-input").value = "";
    document.getElementById("eighth-digit-input").value = "";
    document.getElementById("ninth-digit-input").value = "";
    document.getElementById("tenth-digit-input").value = "";
    document.getElementById("eleventh-digit-input").value = "";

    detectBtn.style.display = "inline-block";
    resultContainer.style.display = "none";
}

// First Input Box
document.getElementById("first-digit-input").oninput = (event) => {
    if (event.target.value) {
        document.getElementById("first-digit-input").value = event.target.value.slice(-1);

        document.getElementById("second-digit-input").focus();
    }
};

// Second Input Box
document.getElementById("second-digit-input").onkeydown = (event) => {
    if(event.key === "Backspace") {
        const value = document.getElementById("second-digit-input").value;

        if(!value) {
            document.getElementById("first-digit-input").focus();
        } else {
            document.getElementById("second-digit-input").value = ""
        }
    }
}

document.getElementById("second-digit-input").oninput = (event) => {
    if (event.target.value) {
        document.getElementById("second-digit-input").value = event.target.value.slice(-1);

        document.getElementById("third-digit-input").focus();
    }
};

// Third Input Box
document.getElementById("third-digit-input").onkeydown = (event) => {
    if(event.key === "Backspace") {
        const value = document.getElementById("third-digit-input").value;

        if(!value) {
            document.getElementById("second-digit-input").focus();
        } else {
            document.getElementById("third-digit-input").value = ""
        }
    }
}

document.getElementById("third-digit-input").oninput = (event) => {
    if (event.target.value) {
        document.getElementById("third-digit-input").value = event.target.value.slice(-1);

        document.getElementById("fourth-digit-input").focus();
    }
};

// Fourth Input Box
document.getElementById("fourth-digit-input").onkeydown = (event) => {
    if(event.key === "Backspace") {
        const value = document.getElementById("fourth-digit-input").value;

        if(!value) {
            document.getElementById("third-digit-input").focus();
        } else {
            document.getElementById("fourth-digit-input").value = ""
        }    
    }
}

document.getElementById("fourth-digit-input").oninput = (event) => {
    if (event.target.value) {
        document.getElementById("fourth-digit-input").value = event.target.value.slice(-1);

        document.getElementById("fifth-digit-input").focus();
    }
};

// Fifth Input Box
document.getElementById("fifth-digit-input").onkeydown = (event) => {
    if(event.key === "Backspace") {
        const value = document.getElementById("fifth-digit-input").value;

        if(!value) {
            document.getElementById("fourth-digit-input").focus();
        } else {
            document.getElementById("fifth-digit-input").value = ""
        }
    }
}

document.getElementById("fifth-digit-input").oninput = (event) => {
    if (event.target.value) {
        document.getElementById("fifth-digit-input").value = event.target.value.slice(-1);

        document.getElementById("sixth-digit-input").focus();
    }
};

// Sixth Input Box
document.getElementById("sixth-digit-input").onkeydown = (event) => {
    if(event.key === "Backspace") {
        const value = document.getElementById("sixth-digit-input").value;

        if(!value) {
            document.getElementById("fifth-digit-input").focus();
        } else {
            document.getElementById("sixth-digit-input").value = ""
        }
    }
}

document.getElementById("sixth-digit-input").oninput = (event) => {
    if (event.target.value) {
        document.getElementById("sixth-digit-input").value = event.target.value.slice(-1);

        document.getElementById("seventh-digit-input").focus();
    }
};

// Seventh Input Box
document.getElementById("seventh-digit-input").onkeydown = (event) => {
    if(event.key === "Backspace") {
        const value = document.getElementById("seventh-digit-input").value;

        if(!value) {
            document.getElementById("sixth-digit-input").focus();
        } else {
            document.getElementById("seventh-digit-input").value = ""
        }
    }
}

document.getElementById("seventh-digit-input").oninput = (event) => {
    if (event.target.value) {
        document.getElementById("seventh-digit-input").value = event.target.value.slice(-1);

        document.getElementById("eighth-digit-input").focus();
    }
};

// Eighth Input Box
document.getElementById("eighth-digit-input").onkeydown = (event) => {
    if(event.key === "Backspace") {
        const value = document.getElementById("eighth-digit-input").value;

        if(!value) {
            document.getElementById("seventh-digit-input").focus();
        } else {
            document.getElementById("eighth-digit-input").value = ""
        }
    }
}

document.getElementById("eighth-digit-input").oninput = (event) => {
    if (event.target.value) {
        document.getElementById("eighth-digit-input").value = event.target.value.slice(-1);

        document.getElementById("ninth-digit-input").focus();
    }
};

// Ninth Input Box
document.getElementById("ninth-digit-input").onkeydown = (event) => {
    if(event.key === "Backspace") {
        const value = document.getElementById("ninth-digit-input").value;

        if(!value) {
            document.getElementById("eighth-digit-input").focus();
        } else {
            document.getElementById("ninth-digit-input").value = ""
        }
    }
}

document.getElementById("ninth-digit-input").oninput = (event) => {
    if (event.target.value) {
        document.getElementById("ninth-digit-input").value = event.target.value.slice(-1);

        document.getElementById("tenth-digit-input").focus();
    }
};

// Tenth Input Box
document.getElementById("tenth-digit-input").onkeydown = (event) => {
    if(event.key === "Backspace") {
        const value = document.getElementById("tenth-digit-input").value;

        if(!value) {
            document.getElementById("ninth-digit-input").focus();
        } else {
            document.getElementById("tenth-digit-input").value = ""
        }
    }
}

document.getElementById("tenth-digit-input").oninput = (event) => {
    if (event.target.value) {
        document.getElementById("tenth-digit-input").value = event.target.value.slice(-1);

        document.getElementById("eleventh-digit-input").focus();
    }
};

// Eleventh Input Box
document.getElementById("eleventh-digit-input").onkeydown = (event) => {
    if(event.key === "Backspace") {
        const value = document.getElementById("eleventh-digit-input").value;

        if(!value) {
            document.getElementById("tenth-digit-input").focus();
        } else {
            document.getElementById("eleventh-digit-input").value = ""
        }
    }
}

document.getElementById("eleventh-digit-input").oninput = (event) => {
    if (event.target.value) {
        document.getElementById("eleventh-digit-input").value = event.target.value.slice(-1);
    }
};