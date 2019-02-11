//% color=#f44242 icon="\uf0ad" block="windbeast"
namespace windbeast {
    
    //% blockId=sonar_ping block="ping trig %trig|echo %echo|unit %unit"
    export function ping(trig: DigitalPin, echo: DigitalPin, unit: PingUnit, maxCmDistance = 500): number {
        // send pulse
        pins.setPull(trig, PinPullMode.PullNone);
        pins.digitalWritePin(trig, 0);
        control.waitMicros(2);
        pins.digitalWritePin(trig, 1);
        control.waitMicros(10);
        pins.digitalWritePin(trig, 0);

        // read pulse
        const d = pins.pulseIn(echo, PulseValue.High, maxCmDistance * 43);

        switch (unit) {
            case PingUnit.Centimeters: return d / 43;
            case PingUnit.Inches: return d / 110;
            default: return d ;
        }
    }
}