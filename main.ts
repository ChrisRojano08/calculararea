input.onButtonPressed(Button.A, function () {
    base = randint(1, 20)
    altura = randint(1, 20)
    basic.showNumber(base)
    basic.pause(100)
    basic.showString(" x")
    basic.pause(100)
    basic.showNumber(altura)
    basic.pause(100)
    basic.showString("Area")
    basic.pause(100)
    basic.showNumber(base * altura / 2)
    basic.pause(100)
    basic.showLeds(`
        . . . . #
        . . . # #
        . . # # #
        . # # # #
        # # # # #
        `)
    basic.pause(5000)
    basic.clearScreen()
})
let altura = 0
let base = 0
basic.showLeds(`
    . # . # .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.pause(2000)
basic.clearScreen()
