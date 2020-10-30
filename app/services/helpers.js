const moduleCountry = require('countries-list')


const emailValidation = (email) => {
  let format = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return !!email.match(format);
}

const formatPhone = (code, phone) => {
  return String(code) + String(phone);
}

let getCountryList = () => {

  let countryList = [];
  let item = {}
  let list = moduleCountry.countries;

  Object.keys(list).forEach(key => {

    item = list[key];
    item.key = key;

    countryList.push(item);

  });

  return countryList;
}


module.exports = {
  emailValidation,
  formatPhone,
  getCountryList
}