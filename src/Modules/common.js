 const getName = (name) => name;
 module.exports.getName = (name) => name;
 module.exports.getSurName = (surname) => surname;
module.exports.getFullname (name, surname) => `${getName(name)} $ {getSurName(surname)}`;
