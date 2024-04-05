let visledek = 0
let cislo = 0
input.onGesture(Gesture.Shake, function () {
    visledek = 0
    cislo = 0
})
input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(cislo - visledek)
})
input.onButtonPressed(Button.A, function () {
    visledek += 1
    basic.showNumber(visledek)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(cislo + visledek)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showNumber(cislo / visledek)
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    cislo += 1
    basic.showNumber(cislo)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showNumber(cislo * visledek)
})
