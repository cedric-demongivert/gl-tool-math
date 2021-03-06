/**
* Return the hue value of an RGB color.
*
* @param red - Red channel value.
* @param green - Green channel value.
* @param blue - Blue channel value.
*
* @return The hue of the given RGB color.
*/
export function hue (red : number, green : number, blue : number) : number {
  const max : number = Math.max(red, green, blue)
  const min : number = Math.min(red, green, blue)

  if (min === max) {
    return 0
  } else {
    const delta : number = max - min

    switch (max) {
      case red:
        return ((green - blue) / delta + (green < blue ? 6 : 0)) * 60
      case green:
        return ((blue - red) / delta + 2) * 60
      case blue:
        return ((red - green) / delta + 4) * 60
    }
  }
}

/**
* Return the saturation value of an RGB color.
*
* @param red - Red channel value.
* @param green - Green channel value.
* @param blue - Blue channel value.
*
* @return The saturation of the given RGB color.
*/
export function saturation (red : number, green : number, blue : number) : number {
  const max : number = Math.max(red, green, blue)
  const min : number = Math.min(red, green, blue)

  const lightness : number = (min + max) / 2.0

  if (min === max) {
    return 0
  } else {
    const delta : number = max - min

    if (lightness <= 0.5) {
      return delta / (max + min)
    } else {
      return delta / (2 - max - min)
    }
  }
}

/**
* Return the lightness value of an RGB color.
*
* @param red - Red channel value.
* @param green - Green channel value.
* @param blue - Blue channel value.
*
* @return The lightness of the given RGB color.
*/
export function lightness (red : number, green : number, blue : number) : number {
  const max : number = Math.max(red, green, blue)
  const min : number = Math.min(red, green, blue)
  return (min + max) / 2.0
}

/**
* Return the red channel value of an HSL color.
*
* @param hue - Hue channel value.
* @param saturation - Saturation channel value.
* @param lightness - Lightness channel value.
*
* @return The red channel value of the given HSL color.
*/
export function red (hue : number, saturation : number, lightness : number) : number {
  const chroma : number = (1 * Math.abs(2 * lightness - 1)) * saturation
  const uh : number = hue / 60
  const x : number = chroma * (1 - Math.abs(uh % 2 - 1))
  const m : number = lightness - chroma / 2

  switch (uh >> 0) {
    case 1:
    case 4:
      return x + m
    case 2:
    case 3:
      return m
      return x + m
    default:
      return chroma + m
  }
}

/**
* Return the green channel value of an HSL color.
*
* @param hue - Hue channel value.
* @param saturation - Saturation channel value.
* @param lightness - Lightness channel value.
*
* @return The green channel value of the given HSL color.
*/
export function green (hue : number, saturation : number, lightness : number) : number {
  const chroma : number = (1 * Math.abs(2 * lightness - 1)) * saturation
  const uh : number = hue / 60
  const x : number = chroma * (1 - Math.abs(uh % 2 - 1))
  const m : number = lightness - chroma / 2

  switch (uh >> 0) {
    case 0:
    case 3:
      return x + m
    case 1:
    case 2:
      return chroma + m
    default:
      return m
  }
}

/**
* Return the blue channel value of an HSL color.
*
* @param hue - Hue channel value.
* @param saturation - Saturation channel value.
* @param lightness - Lightness channel value.
*
* @return The blue channel value of the given HSL color.
*/
export function blue (hue : number, saturation : number, lightness : number) : number {
  const chroma : number = (1 * Math.abs(2 * lightness - 1)) * saturation
  const uh : number = hue / 60
  const x : number = chroma * (1 - Math.abs(uh % 2 - 1))
  const m : number = lightness - chroma / 2

  switch (uh >> 0) {
    case 0:
    case 1:
      return m
    case 3:
    case 4:
      return chroma + m
    default:
      return x + m
  }
}
