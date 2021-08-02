/* eslint-disable import/prefer-default-export */
export const getNumberWithUnit = (num: number) => {
  const units = ['', 'K', 'M', 'B', 'T', 'Q']
  const unit = Math.floor((num / 1.0e1).toFixed(0).toString().length)
  const r = unit % 3
  const u = unit - r
  const e = '1.0e+' + u // eslint-disable-line prefer-template
  const eisNumber = +e
  const x = Math.abs(num) / +eisNumber.toFixed(2)
  return x.toFixed(2) + ' ' + units[Math.floor(unit / 3)] // eslint-disable-line prefer-template
}
