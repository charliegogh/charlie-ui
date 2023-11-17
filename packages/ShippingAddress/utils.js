const desensitizationUserName = (name) => {
  if (name && name.length <= 5) {
    return name.substr(0, 1) + new Array(name.length).join('*')
  } else if (name && name.length >= 6 && name.length < 20) {
    return (
      name.substr(0, 3) +
      new Array(name.length - 4).join('*') +
      name.substr(-2)
    )
  } else if (name && name.length >= 20) {
    return (
      name.substr(0, 4) +
      new Array(name.length - 5).join('*') +
      name.substr(-4)
    )
  }
  return ''
}

const desensitizationPhone = (num) => {
  if (num && num.length <= 3) {
    const starArr = new Array(num.length - 1).fill('*')
    const starArrStr = starArr.join('')
    const data = num.replace(/(\w{1}).*/, '$1' + starArrStr)
    return data
  } else if (num && num.length > 3 && num.length <= 6) {
    const starArr = new Array(num.length - 2).fill('*')
    const starArrStr = starArr.join('')
    const data = num.replace(/(\w{1}).*(\w{1})/, '$1' + starArrStr + '$2')
    return data
  } else if (num && num.length > 6 && num.length <= 11) {
    const starArr = new Array(num.length - 5).fill('*')
    const starArrStr = starArr.join('')
    const data = num.replace(/(\d{3})\d{6}(\d*)/, '$1' + starArrStr + '$2')
    return data
  } else if (num && num.length > 11) {
    const starArr = new Array(num.length - 5).fill('*')
    const starArrStr = starArr.join('')
    const data = num.replace(/(\d{3}).*(\d{2})/, '$1' + starArrStr + '$2')
    return data
  }
  return ''
}

export {
  desensitizationUserName,
  desensitizationPhone
}
