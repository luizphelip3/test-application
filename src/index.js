const specialCharactersList = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "[",
  "]",
  "{",
  "}",
];

function validatePassword(string) {
  let password = string;

  let errors = [];

  let result = false;

  const passwordIsValid = { result, errors };

  let specialCharacter = [];

  let upperCaseLetter = [];

  let lowerCaseLetter = [];

  if (password.length < 16 || password.length > 32) {
    errors.push("Tamanho inválido");
  }

  for (let i = 0; i <= password.length; i++) {
    let actualCharacter = password.charAt(i);

    if(specialCharactersList.find(element => element === actualCharacter)){
      specialCharacter.push(i)
    }

    // if (actualCharacter == actualCharacter.toUpperCase()) {
    //   upperCaseLetter.push(actualCharacter);
    //   console.log(`Tamanho do array de letras maiusculas ${upperCaseLetter}`);
    // }

    // if (password.charAt(i).toLowerCase() === password[i]) {
    //   lowerCaseLetter.push(i);
    // }

    console.log(
      `Tamanho do array de caracteres especiais: ${specialCharacter}`
    );
  }

  if (specialCharacter.length < 2) {
    errors.push("A senha deve possuir pelo menos 2 caracteres especiais");
  }

  if (upperCaseLetter.length === 0) {
    errors.push(
      "A senha deve ter pelo menos uma letra maiúscula e uma letra minúscula"
    );
  }

  if (passwordIsValid.errors.length == 0) {
    passwordIsValid.result = true;
  }

  return passwordIsValid;
}

var password = "!1!234#";
console.log(validatePassword(password));
