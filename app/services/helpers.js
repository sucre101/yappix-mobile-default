const moduleCountry = require('countries-list')


const emailValidation = email => {
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

let cNumToStr = number => {

  if (number < 1000) {
    return number;
  }

  let p = Math.floor(Math.log(number) / Math.LN10),
      l = Math.floor(p / 3);
  return (Math.pow(10, p - l * 3) * +(number / Math.pow(10, p)).toFixed(1)) + ' ' + ['', 'K', 'M'][l];

}

let cropLongText = (text, countSymbols = 30) => {
  let output = text;

  if (text.length > countSymbols) {
    output = output.slice(0, countSymbols) + '...';
  }

  return output;
}

module.exports = {
  emailValidation,
  formatPhone,
  getCountryList,
  cNumToStr,
  cropLongText
}
