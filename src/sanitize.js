export function sanitizeHTML(val) {
  return val.replace(/(<([^>]+)>)/gi, '')
}

export function padStart(val, length, fill) {
  return `${val}`.padStart(length, fill)
}

export function dateToSlug(val) {
  return `${val.getFullYear()}${padStart(val.getMonth() + 1, 2, '0')}${padStart(
    val.getDate(),
    2,
    '0'
  )}`
}

export function numberWithCommas(val) {
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export function sanitizeToString(val) {
  let tmp = val.toLowerCase() // lower case
  tmp = tmp.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, 'a') // Letter "a"
  tmp = tmp.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, 'e') // Letter "e"
  tmp = tmp.replace(/i|í|î|ï|ì|ï/gi, 'i') // Letter "i"
  tmp = tmp.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, 'o') // Letter "o"
  tmp = tmp.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, 'u') // Letter "u"
  tmp = tmp.replace(/đ/gi, 'd') // Letter "d"
  return tmp
}

export function toSlug(val) {
  let slug = sanitizeToString(val)
  slug = slug.replace(/[%#&*+~.()$'"!:@\\/]/gi, '') // Characteres
  slug = slug.replace(/\s+/g, '-') // Change whitespace to "-"
  slug = slug.replace(/\s*$/g, '') // Trim the last whitespace
  return slug
}

export default {
  sanitizeHTML,
  padStart,
  dateToSlug,
  numberWithCommas,
  sanitizeToString,
  toSlug,
}
