basic.clearScreen()
basic.forever(function () {
    basic.showString("" + (Sensor.tempC(AnalogPin.P1)))
    basic.pause(500)
})
