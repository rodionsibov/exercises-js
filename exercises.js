const sumDigits = (num) => {
    const str = String(num);
    let result = 0;

    for (let i = 0; i < str.length; i++) {
	result += Number(str[i]);
    }

    return result;
}

const addDigits = (num) => {
    let result = num;

    while (result >= 10) {
	result = sumDigits(result);
    }

    return result;
}

console.log(addDigits(598997686567));
