function personalBMI(name, age, weight, height) {
    let bmi = calculateBMI(weight, height);
    let status = checkStatus(bmi)

    let patientChartObj = {
        name: name,
        personalInfo: {
            age: age,
            weight: Math.round(weight),
            height: Math.round(height)
        },
        BMI: bmi,
        status: status
    };

    if (patientChartObj['status'] === 'obese') {
        patientChartObj['recommendation'] = 'admission required';
    }

    return patientChartObj;

    function calculateBMI(weight, height) {
        return Math.round(weight / Math.pow(Number(height / 100), 2));
    }

    function checkStatus(bmi) {
        let status = '';
        if (bmi < 18.5) {
            status = 'underweight';
        } else if (bmi < 25) {
            status = 'normal';
        } else if (bmi < 30) {
            status = 'overweight';
        } else {
            status = 'obese';
        }
        return status
    }
}

// personalBMI('Peter', 29, 75, 182);
console.log(personalBMI('Honey Boo Boo', 9, 57, 137));;