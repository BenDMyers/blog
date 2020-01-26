import React, {useState} from 'react';
import ColorInput, { toRgba } from '../../components/post/ColorInput';
import './placeholder-contrast-checker.css'

const PlaceholderContrastChecker = (props) => {
    const [inputBackground, setInputBackground] = useState('rgba(255, 255, 255, 1)');
    const [placeholderColor, setPlaceholderColor] = useState('rgba(119, 119, 119, 1)');
    const [valueColor, setValueColor] = useState('rgba(0, 0, 0, 1)');

    return (
        <div className="placeholder-contrast-checker">
            <div className="placeholder-contrast-checker--sliders">
                <ColorInput
                    showColorBox={false}
                    defaultValue={{ r: 255, g: 255, b: 255 }}
                    onChange={(newColor) => {setInputBackground(toRgba(newColor))}}
                />
                <ColorInput
                    showColorBox={false}
                    useAlpha
                    defaultValue={{ r: 119, g: 119, b: 119 }}
                    onChange={(newColor) => {setPlaceholderColor(toRgba(newColor))}}
                />
                <ColorInput
                    showColorBox={false}
                    defaultValue={{ r: 0, g: 0, b: 0 }}
                    onChange={(newColor) => {setValueColor(toRgba(newColor))}}
                />
            </div>
            <div className="placeholder-contrast-checker--demo">
                <div
                    className="placeholder-contrast-checker--demo--input"
                    style={{backgroundColor: inputBackground}}
                >
                    <span style={{color: placeholderColor}}>My hovercraft </span>
                    <span style={{color: valueColor}}>is full of eels</span>
                </div>
            </div>
            <div className="placeholder-contrast-checker--results">

            </div>
        </div>
    );
}

export default PlaceholderContrastChecker;