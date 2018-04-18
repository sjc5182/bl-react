export const grid = {
  size: 8,
  unit: 'px',
  scale: function (factor, adjust) {
    if (!adjust) adjust = 0
    return `${Math.ceil(this.size * factor) + adjust}${this.unit}`
  },
  scaleValue: function (factor, adjust) {
    if (!adjust) adjust = 0
    return Math.ceil(this.size * factor) + adjust
  },
  scaleNoRound: function (factor) {
    return `${this.size * factor}${this.unit}`
  },
  scaleAsNumber: function (factor) {
    return +`${Math.ceil(this.size * factor)}`
  },
  get half() {
    return `${Math.ceil(this.size / 2)}${this.unit}`
  },
  get quarter() {
    return `${Math.ceil(this.size / 4)}${this.unit}`
  }
}

export const color = {
  purple: '#956bff',
  white: '#ffffff',
  grey: '#3c424f',
  grey0: '#2A2F37',
  grey1: '#95989F',
  dark: '#20242a'
}

export const font = {
  light: 'UbuntuLight',
  lightItalic: 'UbuntuLightItalic',
  medium: 'UbuntuMedium',
  mediumItalic: 'UbuntuMediumItalic',
  normal: 'UbuntuNormal',
  normalItalic: 'UbuntuNormalItalic',
  bold: 'UbuntuBold',
  boldItalic:'UbuntuBoldItalic'
}