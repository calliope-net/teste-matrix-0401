function uhr (st: number, mi: number) {
    matrix.clearMatrix()
    matrix.writeClock(30, 23, 24, st, mi)
    matrix.displayMatrix(0, 15, matrix.eI2C.I2C_x3D)
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    m += -1
    uhr(24, m)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    m += 1
    uhr(24, m)
})
let m = 0
matrix.init(matrix.ePages.y64, false, false, matrix.eI2C.I2C_x3D)
matrix.displayMatrix()
m = 0
