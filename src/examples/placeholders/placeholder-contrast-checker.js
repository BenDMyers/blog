import React, {useState} from 'react';
import HslInput, { toHsla } from '../../components/post/ColorInput/hsl-input';
import RgbInput, { toRgba } from '../../components/post/ColorInput/rgb-input';
import './placeholder-contrast-checker.css'
import blend from '../../utils/blend';
import colorContrast from '../../utils/color-contrast';

const PlaceholderContrastChecker = (props) => {
    const [inputBackground, setInputBackground] = useState({r: 255, g: 255, b: 255, a: 1});
    const [placeholderColor, setPlaceholderColor] = useState({r: 119, g: 119, b: 119, a: 0.8});
    const [valueColor, setValueColor] = useState({r: 0, g: 0, b: 0, a: 1});

    const effectivePlaceholderColor = blend(placeholderColor, inputBackground);
    const placeholderBackgroundContrast = colorContrast(effectivePlaceholderColor, inputBackground);
    const placeholderValueContrast = colorContrast(effectivePlaceholderColor, valueColor);
    const valueBackgroundContrast = colorContrast(valueColor, inputBackground);

    return (
        <div className="placeholder-contrast-checker">
            <div className="placeholder-contrast-checker--sliders">
                <RgbInput
                    showColorBox={false}
                    defaultValue={{ r: 255, g: 255, b: 255 }}
                    onChange={(newColor) => {setInputBackground(newColor)}}
                />
                <RgbInput
                    showColorBox={false}
                    useAlpha
                    defaultValue={{ r: 119, g: 119, b: 119, a: 0.8 }}
                    onChange={(newColor) => {setPlaceholderColor(newColor)}}
                />
                <RgbInput
                    showColorBox={false}
                    defaultValue={{ r: 0, g: 0, b: 0 }}
                    onChange={(newColor) => {setValueColor(newColor)}}
                />
            </div>
            <div className="placeholder-contrast-checker--demo">
                <div
                    className="placeholder-contrast-checker--demo--input"
                    style={{backgroundColor: toRgba(inputBackground)}}
                >
                    <span style={{color: toRgba(placeholderColor)}}>My hovercraft </span>
                    <span style={{color: toRgba(valueColor)}}>is full of eels</span>
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
            <HslInput
                showColorBox={false}
                defaultValue={{ h: 0, s: 0, l: 0.47 }}
                onChange={(newColor) => {}}
            />
        </div>
    );
}

function truncate(number) {
    return Number(Number(number).toFixed(2))
}

export default PlaceholderContrastChecker;