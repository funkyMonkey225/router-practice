const operation = (str, total) => {
    let arr = str.split(' ');
    if (arr.length < 3 || arr[2] === "") {
        return arr[0];
    } else {
        let num1 = Number(arr[0]);
        let num2 = Number(arr[2]);
        if (arr[1] === "-") {
            total = subtract(num1, num2);
            return total;
        } else if (arr[1] === "+") {
            total = add(num1, num2);
            return total;
        } else if (arr[1] === "/") {
            total = divide(num1, num2);
            return total;
        } else {
            total = multiply(num1, num2);
            return total;
        }
    }
}

const pemdasOperation = (str, total) => {
    let arr = str.split(' ');
    if (arr.length < 3 || arr[2] === "") {
        return arr[0];
    } else {
        let num1 = Number(arr[0]);
        let num2 = Number(arr[2]);
        if (arr[1] === "-") {
            total = subtract(num1, num2);
            return total;
        } else if (arr[1] === "+") {
            total = add(num1, num2);
            return total;
        } else if (arr[1] === "/") {
            total = divide(num1, num2);
            return total;
        } else {
            total = multiply(num1, num2);
            return total;
        }
    }
}

const add = (num1, num2) => {
    return num1 + num2;
}

const subtract = (num1, num2) => {
    return num1 - num2;
}

const divide = (num1, num2) => {
    return num1 / num2;
}

const multiply = (num1, num2) => {
    return num1 * num2;
}

const transformText = (text) => {
    text.toUpperCase();
};

export default {
    operation,
    transformText
}