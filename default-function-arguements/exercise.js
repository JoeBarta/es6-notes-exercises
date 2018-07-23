// refractor the following code
function sum(a, b) {
    if (a === undefined) {
        a = 0;
    }

    if (b === undefined) {
        b = 0;
    }

    return a + b;
}

// refractored with default args
const sum = (a = 0, b = 0) => a + b;

// ----------------------------------------------------
function addOffset(style) {
    if (!style) {
        style = {};
    }

    style.offset = '10px';

    return style;
}

// refractored
const addOffset = (style = {}) => { style.offset = '10px'; return style};