function attachEventsListeners() {
    let convertBtn = document.getElementById('convert');
    convertBtn.addEventListener('click', distanceConverter);

    function distanceConverter() {
        let fromValue = Number(document.getElementById('inputDistance').value);
        let inputUnits = document.getElementById('inputUnits').value;
        let outputUnits = document.getElementById('outputUnits').value;

        let fromValueInMeter = toMeterConverter(fromValue, inputUnits);
        let outputValue = convertDistance(fromValueInMeter, outputUnits);

        document.getElementById('outputDistance').value = outputValue;
    }

    function toMeterConverter(fromValue, inputUnits) {
        switch (inputUnits) {
            case 'km':
                return fromValue * 1000;
            case 'm':
                return fromValue;
            case 'cm':
                return fromValue * 0.01;
            case 'mm':
                return fromValue * 0.001;
            case 'mi':
                return fromValue * 1609.34;
            case 'yrd':
                return fromValue * 0.9144;
            case 'ft':
                return fromValue * 0.3048;
            case 'in':
                return fromValue * 0.0254;
        }
    }

    function convertDistance(fromValue, outputUnits) {
        switch (outputUnits) {
            case 'km':
                return fromValue / 1000;
            case 'm':
                return fromValue;
            case 'cm':
                return fromValue / 0.01;
            case 'mm':
                return fromValue / 0.001;
            case 'mi':
                return fromValue / 1609.34;
            case 'yrd':
                return fromValue / 0.9144;
            case 'ft':
                return fromValue / 0.3048;
            case 'in':
                return fromValue / 0.0254;
        }
    }
}