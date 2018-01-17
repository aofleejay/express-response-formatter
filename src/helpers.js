exports.getStatusByCode = code => {
  const success = /^2|3/;
  const fail = /^4/;
  const error = /^5/;

  let status
  if (success.test(code)) {
    status = 'success'
  } else if (fail.test(code)) {
    status = 'fail'
  } else if (error.test(code)) {
    status = 'error'
  } else {
    status = ''
  }

  return status
}