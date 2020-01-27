import React, {useReducer} from 'react';
import './color-input.css';

/**
 * props.defaultValue = {h, s, l, [a]}
 * props.showColorBox
 * props.useAlpha
 */
const HslInput = (props) => {
    function colorReducer(color, {type, value}) {
        switch(type) {
            case 'hue':
                props.onChange && props.onChange({...color, h: value});
                return {...color, h: value};
            case 'saturation':
                props.onChange && props.onChange({...color, s: value});
                return {...color, s: value};
            case 'lightness':
                props.onChange && props.onChange({...color, l: value});
                return {...color, l: value};
            case 'alpha':
                props.onChange && props.onChange({...color, a: value});
                return {...color, a: value};
            default:
                return color;
        }
    }
    const {h, s, l, a=1} = props.defaultValue;
    const [color, dispatch] = useReducer(colorReducer, {h, s, l, a});

    const hueStyle = { backgroundImage: `-webkit-gradient(linear, left top, right top, color-stop(0%,#ff3232), color-stop(20%,#fff130), color-stop(35%,#45ff30), color-stop(52%,#28fff0), color-stop(71%,#282cff), color-stop(88%,#ff28fb), color-stop(100%,#ff0094))`};

    const saturationStyle = { backgroundImage: `linear-gradient(to right, hsla(${color.h}, 0%, ${color.l * 100}%, 1.0), hsla(${color.h}, 100%, ${color.l * 100}%, 1.0))`}

    const lightnessStyle = { backgroundImage: `linear-gradient(to right, hsla(${color.h}, ${color.s * 100}%, 0%, 1.0), hsla(${color.h}, ${color.s * 100}%, 50%, 1.0), hsla(${color.h}, ${color.s * 100}%, 100%, 1.0))` };

    const alphaStyle = { backgroundImage: `-webkit-gradient(linear, left top, right top, color-stop(${color.a}, #777777), color-stop(${color.a}, var(--slider-background)))` };

    console.log(color, lightnessStyle)

    let formattedAlpha = Number(color.a).toFixed(2);

    return (
        <span className="color-input">
            {/* <input type="text" aria-hidden="true" {...textInputProps} /> */}
            <div className="range-with-labels">
                <label>
                    <b>H</b>
                    <input
                        type="range"
                        min="0"
                        max="359"
                        value={color.h}
                        step="1"
                        onInput={(e) => {dispatch({ type: 'hue', value: e.target.value })}}
                        style={hueStyle}
                    />
                </label>
                <span aria-hidden="true" style={{display: 'inline'}}>{color.h}</span>
            </div>
            <div className="range-with-labels">
                <label>
                    <b>S</b>
                    <input
                        type="range"
                        min="0"
                        max="1"
                        value={color.s}
                        step="0.01"
                        onChange={(e) => {dispatch({type: 'saturation', value: e.target.value})}}
                        style={saturationStyle}
                    />
                </label>
                <span aria-hidden="true" style={{display: 'inline'}}>{color.s}</span>
            </div>
            <div className="range-with-labels">
                <label>
                    <b>L</b>
                    <input
                        type="range"
                        min="0"
                        max="1"
                        value={color.l}
                        step="0.01"
                        onChange={(e) => {dispatch({type: 'lightness', value: e.target.value})}}
                        style={lightnessStyle}
                    />
                </label>
                <span aria-hidden="true" style={{display: 'inline'}}>{color.l}</span>
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
            {props.showColorBox && <div className="color-box" style={{backgroundColor: toHsla(color)}} />}
        </span>
    );
}

HslInput.defaultProps = {
    showColorBox: true
}

export function toHsla({h, s, l, a}) {return `hsla(${h}, ${s}, ${l}, ${a})`}

export default HslInput;