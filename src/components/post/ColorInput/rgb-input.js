import React, {useReducer} from 'react';
import './color-input.css';

/**
 * props.defaultValue = {r, g, b, [a]}
 * props.showColorBox
 * props.useAlpha
 */
const RgbInput = (props) => {
    function colorReducer(color, {type, value}) {
        switch(type) {
            case 'red':
                props.onChange && props.onChange({...color, r: value});
                return {...color, r: value};
            case 'green':
                props.onChange && props.onChange({...color, g: value});
                return {...color, g: value};
            case 'blue':
                props.onChange && props.onChange({...color, b: value});
                return {...color, b: value};
            case 'alpha':
                props.onChange && props.onChange({...color, a: value});
                return {...color, a: value};
            default:
                return color;
        }
    }
    const {r, g, b, a=1} = props.defaultValue;
    const [color, dispatch] = useReducer(colorReducer, {r, g, b, a});

    const redStyle = { backgroundImage: `-webkit-gradient(linear, left top, right top, color-stop(${color.r / 255}, red), color-stop(${color.r / 255}, var(--slider-background)))`};
    const greenStyle = { backgroundImage: `-webkit-gradient(linear, left top, right top, color-stop(${color.g / 255}, green), color-stop(${color.g / 255}, var(--slider-background)))` };
    const blueStyle = { backgroundImage: `-webkit-gradient(linear, left top, right top, color-stop(${color.b / 255}, blue), color-stop(${color.b / 255}, var(--slider-background)))` };
    const alphaStyle = { backgroundImage: `-webkit-gradient(linear, left top, right top, color-stop(${color.a}, #777777), color-stop(${color.a}, var(--slider-background)))` };

    let formattedAlpha = Number(color.a).toFixed(2);

    return (
        <span className="color-input">
            {/* <input type="text" aria-hidden="true" {...textInputProps} /> */}
            <div className="range-with-labels">
                <label>
                    <b>R</b>
                    <input
                        type="range"
                        min="0"
                        max="255"
                        value={color.r}
                        step="1"
                        onInput={(e) => {dispatch({ type: 'red', value: e.target.value })}}
                        style={redStyle}
                    />
                </label>
                <span aria-hidden="true" style={{display: 'inline'}}>{color.r}</span>
            </div>
            <div className="range-with-labels">
                <label>
                    <b>G</b>
                    <input
                        type="range"
                        min="0"
                        max="255"
                        value={color.g}
                        step="1"
                        onChange={(e) => {dispatch({type: 'green', value: e.target.value})}}
                        style={greenStyle}
                    />
                </label>
                <span aria-hidden="true" style={{display: 'inline'}}>{color.g}</span>
            </div>
            <div className="range-with-labels">
                <label>
                    <b>B</b>
                    <input
                        type="range"
                        min="0"
                        max="255"
                        value={color.b}
                        step="1"
                        onChange={(e) => {dispatch({type: 'blue', value: e.target.value})}}
                        style={blueStyle}
                    />
                </label>
                <span aria-hidden="true" style={{display: 'inline'}}>{color.b}</span>
            </div>
            {props.useAlpha && (<div className="range-with-labels">
                <label>
                    <b>A</b>
                    <input
                        type="range"
                        min="0"
                        max="1"
                        value={color.a}
                        step="0.01"
                        onChange={(e) => {dispatch({type: 'alpha', value: e.target.value})}}
                        style={alphaStyle}
                    />
                </label>
                <span aria-hidden="true" style={{display: 'inline'}}>{formattedAlpha}</span>
            </div>)}
            {props.showColorBox && <div className="color-box" style={{backgroundColor: toRgba(color)}} />}
        </span>
    );
}

RgbInput.defaultProps = {
    showColorBox: true
}

export function toRgba({r, g, b, a}) {return `rgba(${r}, ${g}, ${b}, ${a})`}

export default RgbInput;