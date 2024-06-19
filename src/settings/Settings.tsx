import * as React from "react";

import CaptchaFontColorSetting from "./ColorSetting";
import NumMasksSetting from "./NumMasksSetting";


const Settings = () => {
    return (
        <div>
            <CaptchaFontColorSetting/>
            <NumMasksSetting/>
        </div>
    );
};


export default Settings;