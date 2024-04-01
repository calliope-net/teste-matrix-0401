input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    matrix.writeClock_radius24(25, 23)
    matrix.writeDisplay(0, 7, matrix.eI2C.I2C_x3D)
})
matrix.init(matrix.ePages.y64, true, false, matrix.eI2C.I2C_x3D)
matrix.writeDisplay(0, 7, matrix.eI2C.I2C_x3D)
