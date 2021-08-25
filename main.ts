let potPosition = 0
basic.forever(function () {
    potPosition = pins.analogReadPin(AnalogPin.P0)
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(potPosition)
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(potPosition)
})
