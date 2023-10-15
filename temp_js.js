function convertToCelsius() {
    const fahrenheitInput = document.getElementById("fahrenheit");
    const celsiusInput = document.getElementById("celsius");

    if (fahrenheitInput.value !== "") {
        const fahrenheit = parseFloat(fahrenheitInput.value);
        const celsius = (fahrenheit - 32) * (5 / 9);
        celsiusInput.value = celsius.toFixed(2);
    } else {
        alert("Please enter a value in Fahrenheit.");
    }
}

function convertToFahrenheit() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");

    if (celsiusInput.value !== "") {
        const celsius = parseFloat(celsiusInput.value);
        const fahrenheit = (celsius * 9 / 5) + 32;
        fahrenheitInput.value = fahrenheit.toFixed(2);
    } else {
        alert("Kindly enter a value in Celsius.");
    }
}