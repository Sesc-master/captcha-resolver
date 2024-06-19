import {createRoot} from "react-dom/client";
import * as React from "react";

import Settings from "./Settings";


const container = document.querySelector("body");
if (container) {
    const root = createRoot(container);
    root.render(<Settings/>);
}