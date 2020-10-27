const emailValidation = (email) => {
  let format = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return !!email.match(format);
}

const formatPhone = (code, phone) => {
  return String(code) + String(phone);
}


module.exports = {
  emailValidation,
  formatPhone
}