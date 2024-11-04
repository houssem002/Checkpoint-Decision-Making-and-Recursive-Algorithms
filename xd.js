//Recursion fiboncacci
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

//Recursion Palindrome Checker

function checkPalindrome(str, start, end) {
    if (start >= end) {
        return true;
    }
    if (str[start] !== str[end]) {
        return false;
    }
    return checkPalindrome(str, start + 1, end - 1);
}

//Recursion pow

function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    return base * power(base, exponent - 1);
}

//Decision Making (if-else and switch): ( choose at least 2 tasks from below)

// Ticket Pricing:

function ticketPricing(age){
    if (age<=12){return "Ticket Price: $10"
    }else if (age >= 13 && age <= 17) {
        return "Ticket Price: $15";
    } else if (age >= 18) {
        return "Ticket Price: $20";
    } else {
        return "Invalid age entered.";
    }
}

//Weather Clothing Adviser
function clothingAdvice(temperature, isRaining) {
    let advice = "";
    if (temperature > 20) {
        advice += "Wear light clothing.";
    } else if (temperature > 10) {
        advice += "Wear a jacket.";
    } else {
        advice += "Wear warm clothing.";
    }
    if (isRaining) {
        advice += " Also, take an umbrella.";
    }
    return advice;
}

console.log(fibonacci(22));
console.log(power(5,5));
