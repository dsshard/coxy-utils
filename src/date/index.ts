import { capitalize } from '../strings/capitalize'
import { pad } from '../strings/pad'

const monthNamesShort = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
const monthNamesLong = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
]

export function dateFormat(template: string, date?: Date | number) {
  const specs = 'hh:TT:tt:MMMM:Mmmm:MMM:Mmm:YYYY:MM:DD:HH:mm:ss'.split(':')
  // eslint-disable-next-line no-param-reassign
  const d = new Date(date || Date.now())
  const m = d.getMonth()
  const h = d.getHours()
  const TT = h > 12 ? 'PM' : 'AM'
  const hh = pad(h % 12 || 12)
  const iso = `${hh}:${TT}:${TT.toLowerCase()}:${monthNamesLong[m]}:${capitalize(monthNamesLong[m])}:${
    monthNamesShort[m]
  }:${capitalize(monthNamesShort[m])}:${d.toISOString()}`
  return iso.split(/[-:.TZ]/).reduce((template, item, i) => template.split(specs[i]).join(item), template)
}

export const dateAddDays = (date: number | Date, days: number): Date => {
  const result = new Date(date)
  result.setDate(result.getDate() - days)
  return result
}
