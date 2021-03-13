import chroma from "chroma-js";

export const getColorWithOpacity = (color, opacity) => {
    const rgbArr = chroma(color).rgb();
    rgbArr.push(opacity);
    return `rgba(${rgbArr.join(',')})`;
};
