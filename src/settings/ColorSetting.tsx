import * as React from "react";
import {useEffect, useState} from "react";

import {get_captcha_image_font_color, set_captcha_image_font_color} from "../utils/settings";
import {convertColorToHexString} from "../utils/color";
import {DEFAULT_CAPTCHA_IMAGE_FONT_COLOR} from "../utils/defaults";


const CaptchaFontColorSetting = () => {
    const [color, setColor] = useState(convertColorToHexString(DEFAULT_CAPTCHA_IMAGE_FONT_COLOR));

    useEffect(() => {
        get_captcha_image_font_color().then(convertColorToHexString).then(setColor);
    }, []);

    return (
        <form onSubmit={(submitEvent) => {
            submitEvent.preventDefault();
            set_captcha_image_font_color(color);
        }}>
            <label>Font color <input type="color" value={color} onChange={
                (event) => setColor(event.target.value)}/>
            </label>
            <button type="submit">Save</button>
            <button onClick={() => {
                const settingColorHexString = convertColorToHexString(DEFAULT_CAPTCHA_IMAGE_FONT_COLOR);
                set_captcha_image_font_color(settingColorHexString).then(() => setColor(settingColorHexString));
            }}>Set default</button>
        </form>
    );
};

export default CaptchaFontColorSetting;