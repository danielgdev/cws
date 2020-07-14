export default {
  date(val) {
    return /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/.test(val)
  },
  email(val) {
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(val)
  },
  string(val) {
    return !/^$|^\s+$/.test(val)
  },
  slug(val) {
    return /^[a-z0-9-]+$/.test(val)
  },
  url(val) {
    return /^(?:http(s)?:\/\/)?[\w.-]+(?:.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/.test(
      val
    )
  },
}
