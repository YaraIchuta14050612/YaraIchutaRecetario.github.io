// Conversión de Temperatura
function convertTemperature() {
    const temp = parseFloat(document.getElementById('tempInput').value);
    const fromUnit = document.getElementById('tempUnitSelect').value;
    const toUnit = document.getElementById('tempConvertToSelect').value;

    let result;

    if (fromUnit === toUnit) {
        result = temp;
    } else if (fromUnit === 'Celsius' && toUnit === 'Fahrenheit') {
        result = (temp * 9/5) + 32;
    } else if (fromUnit === 'Celsius' && toUnit === 'Kelvin') {
        result = temp + 273.15;
    } else if (fromUnit === 'Fahrenheit' && toUnit === 'Celsius') {
        result = (temp - 32) * 5/9;
    } else if (fromUnit === 'Fahrenheit' && toUnit === 'Kelvin') {
        result = (temp - 32) * 5/9 + 273.15;
    } else if (fromUnit === 'Kelvin' && toUnit === 'Celsius') {
        result = temp - 273.15;
    } else if (fromUnit === 'Kelvin' && toUnit === 'Fahrenheit') {
        result = (temp - 273.15) * 9/5 + 32;
    }

    document.getElementById('tempResult').innerText = result.toFixed(2);
}

// Conversión de Volumen
function convertVolume() {
    const volume = parseFloat(document.getElementById('volumeInput').value);
    const fromUnit = document.getElementById('volumeUnitSelect').value;
    const toUnit = document.getElementById('volumeConvertToSelect').value;

    let result;

    if (fromUnit === toUnit) {
        result = volume;
    } else if (fromUnit === 'Litros' && toUnit === 'Mililitros') {
        result = volume * 1000;
    } else if (fromUnit === 'Litros' && toUnit === 'Galones') {
        result = volume * 0.264172;
    } else if (fromUnit === 'Mililitros' && toUnit === 'Litros') {
        result = volume / 1000;
    } else if (fromUnit === 'Mililitros' && toUnit === 'Galones') {
        result = volume * 0.000264172;
    } else if (fromUnit === 'Galones' && toUnit === 'Litros') {
        result = volume / 0.264172;
    } else if (fromUnit === 'Galones' && toUnit === 'Mililitros') {
        result = volume / 0.000264172;
    }

    document.getElementById('volumeResult').innerText = result.toFixed(2);
}

// Conversión de Peso
function convertWeight() {
    const weight = parseFloat(document.getElementById('weightInput').value);
    const fromUnit = document.getElementById('weightUnitSelect').value;
    const toUnit = document.getElementById('weightConvertToSelect').value;

    let result;

    if (fromUnit === toUnit) {
        result = weight;
    } else if (fromUnit === 'Kilogramos' && toUnit === 'Gramos') {
        result = weight * 1000;
    } else if (fromUnit === 'Kilogramos' && toUnit === 'Libras') {
        result = weight * 2.20462;
    } else if (fromUnit === 'Gramos' && toUnit === 'Kilogramos') {
        result = weight / 1000;
    } else if (fromUnit === 'Gramos' && toUnit === 'Libras') {
        result = weight * 0.00220462;
    } else if (fromUnit === 'Libras' && toUnit === 'Kilogramos') {
        result = weight / 2.20462;
    } else if (fromUnit === 'Libras' && toUnit === 'Gramos') {
        result = weight / 0.00220462;
    }

    document.getElementById('weightResult').innerText = result.toFixed(2);
}

function mostrarCalculadora(tipo) {
    document.querySelectorAll('.calculadora').forEach(calculadora => {
        calculadora.classList.remove('activa');
    });

    if (tipo === 'temp') {
        document.getElementById('tempCalculadora').classList.add('activa');
    } else if (tipo === 'vol') {
        document.getElementById('volCalculadora').classList.add('activa');
    } else if (tipo === 'peso') {
        document.getElementById('pesoCalculadora').classList.add('activa');
    }
}
