import React, {useState} from 'react';
import HslInput, { toHsla } from '../../components/post/ColorInput/hsl-input';
import RgbInput, { toRgba } from '../../components/post/ColorInput/rgb-input';
import './placeholder-contrast-checker.css'
import blend from '../../utils/blend';
import colorContrast from '../../utils/color-contrast';
import { rgbToHsl, hslToRgb } from '../../utils/color-convert';

const USE_RGB = true;
const USE_HSL = false;

const PlaceholderContrastChecker = (props) => {
    const [sliderMode, setSliderMode] = useState(USE_RGB);
    const [inputBackground, setInputBackground] = useState({r: 255, g: 255, b: 255, a: 1});
    const [placeholderColor, setPlaceholderColor] = useState({r: 120, g: 120, b: 120, a: 0.8});
    const [valueColor, setValueColor] = useState({r: 0, g: 0, b: 0, a: 1});

    const rgbSafeInputBackground = (sliderMode === USE_RGB) ? inputBackground : hslToRgb(inputBackground);
    const rgbSafePlaceholderColor = (sliderMode === USE_RGB) ? placeholderColor : hslToRgb(placeholderColor);
    const rgbSafeValueColor = (sliderMode === USE_RGB) ? valueColor : hslToRgb(valueColor);

    console.log(sliderMode, inputBackground, rgbSafeInputBackground, rgbSafePlaceholderColor, rgbSafeValueColor)

    const effectivePlaceholderColor = blend(rgbSafePlaceholderColor, rgbSafeInputBackground);
    const placeholderBackgroundContrast = colorContrast(effectivePlaceholderColor, rgbSafeInputBackground);
    const placeholderValueContrast = colorContrast(effectivePlaceholderColor, rgbSafeValueColor);
    const valueBackgroundContrast = colorContrast(rgbSafeValueColor, rgbSafeInputBackground);

    let ColorSlider = (sliderMode === USE_RGB) ? RgbInput : HslInput;

    const handleSliderModeChange = (event) => {
        if (event.target.value === 'HSL') {
            setSliderMode(USE_HSL);
            setInputBackground(rgbToHsl(inputBackground));
            setPlaceholderColor(rgbToHsl(placeholderColor));
            setValueColor(rgbToHsl(valueColor));
        } else if (event.target.value === 'RGB') {
            setSliderMode(USE_RGB);
            setInputBackground(hslToRgb(inputBackground));
            setPlaceholderColor(hslToRgb(placeholderColor));
            setValueColor(hslToRgb(valueColor));
        }
    }

    return (
        <div className="placeholder-contrast-checker">
            <form aria-label="Choose slider mode" onChange={handleSliderModeChange}>
                <label>
                    <input
                        type="radio"
                        name="slidermode"
                        value="RGB"
                        defaultChecked={sliderMode === USE_RGB}
                    />
                    RGB
                </label>
                <label>
                    <input 
                        type="radio"
                        name="slidermode"
                        value="HSL"
                        defaultChecked={sliderMode === USE_HSL}
                    />
                    HSL
                </label>
            </form>
            <div className="placeholder-contrast-checker--sliders">
                <ColorSlider
                    showColorBox={false}
                    defaultValue={inputBackground}
                    onChange={(newColor) => {setInputBackground(newColor)}}
                />
                <ColorSlider
                    showColorBox={false}
                    useAlpha
                    defaultValue={placeholderColor}
                    onChange={(newColor) => {setPlaceholderColor(newColor)}}
                />
                <ColorSlider
                    showColorBox={false}
                    defaultValue={valueColor}
                    onChange={(newColor) => {setValueColor(newColor)}}
                />
            </div>
            <div className="placeholder-contrast-checker--demo">
                <div
                    className="placeholder-contrast-checker--demo--input"
                    style={{backgroundColor: toRgba(rgbSafeInputBackground)}}
                >
                    <span style={{color: toRgba(rgbSafePlaceholderColor)}}>My hovercraft </span>
                    <span style={{color: toRgba(rgbSafeValueColor)}}>is full of eels</span>
                </div>
            </div>
            <div className="placeholder-contrast-checker--results">
                <div className="placeholder-contrast-checker--result--background-comparison">
                    <div>
                        <b>Placeholder–Background Contrast</b> <div className="placeholder-contrast-checker--ratio"><strong>{truncate(placeholderBackgroundContrast)}</strong>:1</div>
                    </div>
                </div>
                <div className="placeholder-contrast-checker--result--background-comparison">
                    <div>
                        <b>Placeholder–Value Contrast</b> <div className="placeholder-contrast-checker--ratio"><strong>{truncate(placeholderValueContrast)}</strong>:1</div>
                    </div>
                </div>
                <div className="placeholder-contrast-checker--result--background-comparison">
                    <div>
                        <b>Value–Background Contrast</b> <div className="placeholder-contrast-checker--ratio"><strong>{truncate(valueBackgroundContrast)}</strong>:1</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function truncate(number) {
    return Number(Number(number).toFixed(2))
}

export default PlaceholderContrastChecker;