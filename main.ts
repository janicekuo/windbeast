//% weight=0 color=#1E90EF icon="\uf72e"
namespace windbeast {
    /**
    * 左右馬達同時正轉
    */
    //% blockId="foreward" block="windbeast foreward|speed(0~1023) %power"
    //% blockGap=1 weight=40
    //% power.min=0 power.max=1023
    export function foreward(power: number) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.analogWritePin(AnalogPin.P0, power)
        pins.analogWritePin(AnalogPin.P1, power)
    }
    /**
    * 左右馬達同時反轉
    */
    //% blockId="backward" block="windbeast backward|speed(0~1023) %power"
    //% blockGap=1  weight=30
    //% power.min=0 power.max=1023
    export function backward(power: number) {
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.analogWritePin(AnalogPin.P0, power)
        pins.analogWritePin(AnalogPin.P1, power)
    }
    /**
    * 左馬達正轉，右馬達反轉
    */
    //% blockId="rightward" block="windbeast rightward|speed(0~1023) %power"
    //% blockGap=1  weight=20
    //% power.min=0 power.max=1023
    export function rightward(power: number) {
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.analogWritePin(AnalogPin.P0, power)
        pins.analogWritePin(AnalogPin.P1, power)
    }
    /**
    * 左馬達反轉，右馬達正轉
    */
    //% blockId="leftward" block="windbeast leftward|speed(0~1023) %power"
    //% blockGap=1  weight=10
    //% power.min=0 power.max=1023
    export function leftward(power: number) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.analogWritePin(AnalogPin.P0, power)
        pins.analogWritePin(AnalogPin.P1, power)
    }
    /**
    * 左右馬達同時停止轉動
    */
    //% blockId="stop" block="car stop"
    //% blockGap=1 weight=50
    export function stop() {
        pins.analogWritePin(AnalogPin.P0, 0)
        pins.analogWritePin(AnalogPin.P1, 0)
    }
}
