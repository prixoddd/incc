function createPhoneNumber(numbers){
const countryCode = numbers.slice(0,3).join('')
    const areaCode = numbers.slice(3, 6).join('');
    const localNumber = numbers.slice(6).join('');
    return `(${countryCode}) ${areaCode}-${localNumber}`;

}