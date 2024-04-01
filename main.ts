input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    rtcpcf85063tp.readDateTime(rtcpcf85063tp.rtcpcf85063tp_eADDR(rtcpcf85063tp.eADDR.RTC_x51))
    for (let Index = 0; Index <= 11; Index++) {
        matrix.hour_mark(Index, 25, 23, 20, 23)
    }
    matrix.writeClock_radius24(25, 23)
    matrix.hour_mark(rtcpcf85063tp.getByte(rtcpcf85063tp.rtcpcf85063tp_eRegister(rtcpcf85063tp.eRegister.Stunde), rtcpcf85063tp.eFormat.DEC), 25, 23, 0, 10)
    matrix.minute_mark(rtcpcf85063tp.getByte(rtcpcf85063tp.rtcpcf85063tp_eRegister(rtcpcf85063tp.eRegister.Minute), rtcpcf85063tp.eFormat.DEC), 25, 23, 0, 16)
    matrix.writeDisplay()
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    rtcpcf85063tp.readDateTime(rtcpcf85063tp.rtcpcf85063tp_eADDR(rtcpcf85063tp.eADDR.RTC_x51))
    matrix.writeDigitImageArray(rtcpcf85063tp.getTime(rtcpcf85063tp.ePart.mit), 0, 48, 10, 0, matrix.eTransparent.u, matrix.oled_eFaktor(matrix.eFaktor.f2))
    matrix.writeDisplay()
})
matrix.init(matrix.ePages.y64, true, false)
matrix.writeDisplay()
rtcpcf85063tp.beimStart(rtcpcf85063tp.rtcpcf85063tp_eADDR(rtcpcf85063tp.eADDR.RTC_x51))
