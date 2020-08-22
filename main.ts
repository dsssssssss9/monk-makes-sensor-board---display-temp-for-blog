basic.clearScreen()
basic.forever(function () {
    basic.showString("" + (Sensor.tempC(AnalogPin.P0)))
})
