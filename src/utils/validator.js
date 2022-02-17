export default {
  //校验手机号码正则表达式
  validatePhone(phone) {
    const reg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
    return reg.test(phone)
  }
}