import React from "react";

declare module "react" {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        // Declare the custom element here as a property of HTMLAttributes
        "pj1-input"?: React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLElement>,
            HTMLElement>;
    }
}