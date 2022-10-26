let 미세먼지 = 0
music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
OLED.init(128, 64)
basic.forever(function () {
    OLED.clear()
    OLED.writeString("DUST(ug/m3):")
    미세먼지 = Environment.ReadDust(DigitalPin.P16, AnalogPin.P1)
    OLED.writeNum(미세먼지)
    if (미세먼지 > 30) {
        basic.showIcon(IconNames.No)
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else {
        basic.showIcon(IconNames.Heart)
    }
    basic.pause(2000)
})
