const colorContrast = (foreground, background) => {
    const foregroundLuminance = getRelativeLuminance(foreground);
    const backgroundLuminance = getRelativeLuminance(background);

    return (Math.max(foregroundLuminance, backgroundLuminance) + 0.05) / (Math.min(foregroundLuminance, backgroundLuminance) + 0.05);
}

const getRelativeLuminance = (color) => {
    let normalizedRed = color.r / 255;
    let normalizedGreen = color.g / 255;
    let normalizedBlue = color.b / 255;

    let linearRed = srgbToLinearColor(normalizedRed);
    let linearGreen = srgbToLinearColor(normalizedGreen);
    let linearBlue = srgbToLinearColor(normalizedBlue);

    return (0.2126 * linearRed) + (0.7152 * linearGreen) + (0.0722 * linearBlue);
}

const srgbToLinearColor = (normalizedColor) => {
    return (normalizedColor <= 0.03928) ? (normalizedColor / 12.92) : Math.pow((normalizedColor + 0.055) / 1.055, 2.4);
}

export default colorContrast;