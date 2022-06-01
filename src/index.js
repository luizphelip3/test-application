import { Lists } from "./utils/lists.js";

const numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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

    if (Lists.specialCharactersList.find((element) => element === actualCharacter)) {
      specialCharacter.push(i);
      // console.log(
      //   `Tamanho do array de caracteres especiais: ${specialCharacter}`
      // );
    }

    if (Lists.upperCaseLettersList.find((element) => element === actualCharacter)) {
      upperCaseLetter.push(i);
      // console.log(
      //   `Tamanho do array de letras maiusculas ${upperCaseLetter.length}`
      // );
    }

    if (Lists.lowerCaseLettersList.find((element) => element === actualCharacter)) {
      lowerCaseLetter.push(i);
      // console.log(
      //   `Tamanho do array de letras minusculas ${lowerCaseLetter.length}`
      // );
    }

    // for (let j = 0; j < numbersList.length; j++) {
    //   if())
    //   console.log(`Valor do caracter atual é: ${actualCharacter}`);
    //   console.log(`Valor do j é: ${j}`);
    // }
  }

  if (specialCharacter.length < 2) {
    errors.push("A senha deve possuir pelo menos 2 caracteres especiais");
  }

  if (upperCaseLetter.length == 0 || lowerCaseLetter.length == 0) {
    errors.push(
      "A senha deve ter pelo menos uma letra maiúscula e uma letra minúscula"
    );
  }

  return passwordIsValid;
}

var password = "1234545678910111213";
console.log(validatePassword(password));
