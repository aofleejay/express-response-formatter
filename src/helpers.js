// @flow

exports.getStatusByCode = (code: number): string => {
  const stringCode = code.toString()
  const success = /^2|3/;
  const fail = /^4/;
  const error = /^5/;

  let status
  if (success.test(stringCode)) {
    status = 'success'
  } else if (fail.test(stringCode)) {
    status = 'fail'
  } else if (error.test(stringCode)) {
    status = 'error'
  } else {
    status = ''
  }

  return status
}