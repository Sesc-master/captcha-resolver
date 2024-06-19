import {Color} from "scole-captcha-resolver";
import {storage} from "webextension-polyfill";
import {DEFAULT_CAPTCHA_IMAGE_FONT_COLOR} from "./defaults";
import {convertHexStringToColor} from "./color";

export const enum SettingsKeys {
    CAPTCHA_IMAGE_FONT_COLOR = "captchaImageBackgroundColor",
}

export async function get_captcha_image_font_color(): Promise<Color> {
    let storage_data = await storage.sync.get(SettingsKeys.CAPTCHA_IMAGE_FONT_COLOR)
    return convertHexStringToColor(storage_data[SettingsKeys.CAPTCHA_IMAGE_FONT_COLOR]) ?? DEFAULT_CAPTCHA_IMAGE_FONT_COLOR;
}

export async function set_captcha_image_font_color(color: string) {
    return storage.sync.set({[SettingsKeys.CAPTCHA_IMAGE_FONT_COLOR]: color});
}