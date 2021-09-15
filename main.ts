input.onButtonPressed(Button.A, function () {
    basic.showString("" + (gatorEnvironment.getMeasurement(measurementType.eCO2)))
    led.plotBarGraph(
    gatorEnvironment.getMeasurement(measurementType.eCO2),
    100
    )
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (gatorSoil.moisture(AnalogPin.P0, GatorSoilType.Moisture, DigitalPin.P1)))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (gatorEnvironment.getMeasurement(measurementType.degreesF)))
    if (gatorEnvironment.getMeasurement(measurementType.degreesF) < 65) {
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.Sad)
            basic.clearScreen()
        }
    } else if (gatorEnvironment.getMeasurement(measurementType.degreesF) > 75) {
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.Sad)
            basic.clearScreen()
        }
    } else {
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.Happy)
            basic.clearScreen()
        }
    }
})
gatorEnvironment.beginEnvironment()
basic.forever(function () {
    if (gatorSoil.moisture(AnalogPin.P1, GatorSoilType.Moisture, DigitalPin.P0) < 0.4) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(5000)
    }
})
