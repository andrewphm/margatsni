const formatValidationErr = (err) => {
  let formattedErr = err.split('User validation failed: ')[1].split(', ')

  let res = {}
  formattedErr.forEach((err) => {
    let message = err.split(': ')

    res = { ...res, [message[0]]: message[1] }
  })

  return res
}

export default formatValidationErr
