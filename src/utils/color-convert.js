export const rgbToHsl = ({r, g, b, a}) => {
    const normalizedRed = r/255;
    const normalizedGreen = g/255;
    const normalizedBlue = b/255;

    const brightestFactor = Math.max(normalizedRed, normalizedGreen, normalizedBlue);
    const darkestFactor = Math.min(normalizedRed, normalizedGreen, normalizedBlue);

    const luminance = (brightestFactor + darkestFactor) / 2;

    if (brightestFactor === darkestFactor) {
        return {h: 0, s: 0, l: Number(luminance.toFixed(2)), a};
    }

    let normalizedHue, hue, saturation;

    if (luminance < 0.5) {
        saturation = (brightestFactor - darkestFactor) / (brightestFactor + darkestFactor);
    } else {
        saturation = (brightestFactor - darkestFactor) / (2 - brightestFactor - darkestFactor);
    }

    if (normalizedRed === brightestFactor) {
        normalizedHue = (normalizedGreen - normalizedBlue) / (brightestFactor - darkestFactor); 
    }
    else if (normalizedGreen === brightestFactor) {
        normalizedHue = 2 + (normalizedBlue - normalizedRed) / (brightestFactor - darkestFactor);
    }
    else { // normalizedBlue === brightestFactor
        normalizedHue = 4 + (normalizedRed - normalizedGreen) / (brightestFactor - darkestFactor);
    }

    hue = Math.round(((60*normalizedHue) + 360) % 360);

    return {h: hue, s: Number(saturation.toFixed(2)), l: Number(luminance.toFixed(2)), a};
}

export const hslToRgb = ({h, s, l, a}) => {
    h = Number(h);
    s = Number(s);
    l = Number(l);

    if (s === 0) {
        let gray = Math.round(255 * l);
        return {r: gray, g: gray, b: gray, a};
    }

    const chroma = (1 - Math.abs(2*l - 1));
    const normalizedHue = h/60;
    const intermediate = chroma * (1 - Math.abs(normalizedHue % 2 - 1));

    console.log(chroma, normalizedHue, intermediate)

    let point;

    if (0 <= h && h < 60) {
        point = [chroma, intermediate, 0];
    } else if (60 <= h && h < 120) {
        point = [intermediate, chroma, 0];
    } else if (120 <= h && h < 180) {
        point = [0, chroma, intermediate];
    } else if (180 <= h && h < 240) {
        point = [0, intermediate, chroma];
    } else if (240 <= h && h < 300) {
        point = [intermediate, 0, chroma];
    } else if (300 <= h && h < 360) {
        point = [chroma, 0, intermediate];
    }

    let [r, g, b] = point.map((component) => Math.round(255 * (component + l - chroma/2)));
    return {r, g, b, a};
}