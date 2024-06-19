import {MonochromePicture, resolve_captcha} from "scole-captcha-resolver";
import {get_captcha_image_font_color} from "../utils/settings";
import {DEFAULT_NUM_MASKS} from "../utils/defaults";

export default async function solve (imageElement: HTMLImageElement, inputElement?: HTMLInputElement) {
    const fontColor = await get_captcha_image_font_color();

    const monochromePicture = MonochromePicture.from_img(imageElement, fontColor);
    if (!monochromePicture) return;

    const result = resolve_captcha(monochromePicture, DEFAULT_NUM_MASKS);
    if (inputElement) inputElement.value = result;
    return result;
};