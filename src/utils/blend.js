const blend = (foreground, background) => {
    const alpha = foreground.a;
    console.log({foreground, background, alpha})

    return {
        r: Math.round(foreground.r * alpha) + Math.round(background.r * (1 - alpha)),
        g: Math.round(foreground.g * alpha) + Math.round(background.g * (1 - alpha)),
        b: Math.round(foreground.b * alpha) + Math.round(background.b * (1 - alpha)),
        a: 1
    };
}

export default blend;