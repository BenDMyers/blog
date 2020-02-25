// @flow
// Oceanic Next
// Author: Dmitri Voronianski (https://github.com/voronianski)
// https://github.com/voronianski/oceanic-next-color-scheme
// Adapted from: https://github.com/reactjs/reactjs.org/blob/428d52b/src/prism-styles.js

/*:: import type { PrismTheme } from '../src/types' */

var colors = {
    comment: "#777777",
    punctuation: "#abb2bf",
    tag: "#e06c75",
    primitive: "#d19a66",
    string: "#98c379",
    operator: "#56b6c2",
    keyword: "#c678dd",
    function: "#61afef",
    variable: "#c678dd"
}

var theme /*: PrismTheme */ = {
    plain: {
        backgroundColor: "#000000",
        color: "#dddddd",
    },
    styles: [
        {
            types: ["comment", "block-comment", "prolog", "doctype", "cdata", "shebang"],
            style: {
                color: colors.comment,
                fontStyle: 'italic'
            },
        },
        {
            types: ["punctuation"],
            style: {
                color: colors.punctuation,
            },
        },
        {
            types: ["selector", "tag", "unit"],
            style: {
                color: colors.tag,
            },
        },
        {
            types: [
                "boolean",
                "number",
                "constant",
                "symbol",
                "attr-name",
                "deleted",
                "primitive",
                "hexcode",
                "class"
            ],
            style: {
                color: colors.primitive,
            },
        },
        {
            types: [
                "string",
                "char",
                "attr-value",
                "builtin",
                "inserted",
                "attr-value.punctuation"
            ],
            style: {
                color: colors.string,
            },
        },
        {
            types: ["operator", "entity", "url", "class-name", "pseudo-element", "pseudo-class"],
            style: {
                color: colors.operator,
            },
        },
        {
            types: ["at-rule", "keyword"],
            style: {
                color: colors.keyword,
            },
        },
        {
            types: ["function", "label", "id"],
            style: {
                color: colors.function,
            },
        },
        {
            types: ["regex", "variable"],
            style: {
                color: colors.variable
            }
        },
        {
            types: ["bold", "important"],
            style: {
                fontWeight: "bold",
            },
        },
        {
            types: ["italic"],
            style: {
                fontStyle: "italic",
            },
        },
        {
            types: ["namespace"],
            style: {
                opacity: 0.7,
            },
        },
    ],
}

export default theme;