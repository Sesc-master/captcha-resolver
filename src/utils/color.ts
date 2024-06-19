import {Color} from "scole-captcha-resolver";


export function convertColorToHexString(color: Color): string {
    function decimalToHex(number: number, padding: number = 0) {
        let hex = number.toString(16);
        while (hex.length < padding) hex = "0" + hex;
        return hex;
    }

    const configuredColorRedHex = decimalToHex(color.red, 2),
        configuredColorGreenHex = decimalToHex(color.green, 2),
        configuredColorBlueHex = decimalToHex(color.blue, 2);

    return `#${configuredColorRedHex}${configuredColorGreenHex}${configuredColorBlueHex}`;
}


export function convertHexStringToColor(hexString: string): Color | undefined {
    const HEX_COLOR_REGEXP = /^#?(?<red>[0-9a-fA-F]{2})(?<green>[0-9a-fA-F]{2})(?<blue>[0-9a-fA-F]{2})$/;
    const regexpResult = HEX_COLOR_REGEXP.exec(hexString)?.groups;

    const redHex = regexpResult?.red,
        greenHex = regexpResult?.green,
        blueHex = regexpResult?.blue;

    if (!(redHex && greenHex && blueHex)) return undefined;

    try {
        return {
            red: parseInt(redHex, 16),
            green: parseInt(greenHex, 16),
            blue: parseInt(blueHex, 16)
        };
    }
    catch (error) {
        return undefined;
    }
}