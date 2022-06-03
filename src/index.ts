import { Lists } from "./utils/lists";

// Criei uma constante que é um objeto que guarda o array de errors e o boolean result
export type Response = { result: boolean; errors: string[] };

// Aqui fica a função que faz todas as validações requeridas da senha
export function validatePassword(str: string): Response {
  // Instanciei o dado recebido na função dentro de uma variável
  let password = str;

  // Criei uma constante que é um objeto que guarda o array de errors e o boolean result
  let response: Response = { result: false, errors: [] };

  // Criei uma variável que vai servir como um acumulador de caracteres especiais
  let specialCharacter = [];

  // Criei uma variável que vai servir como um acumulador de letras maiúsculas
  let upperCaseLetter = [];

  // Criei uma variável que vai servir como um acumulador de letras minúsculas
  let lowerCaseLetter = [];

  // Criei uma variável que vai servir para validar se existe números sequenciais
  let hasSequentialNumbers = false;

  // Criei uma variável que vai servir para validar se existem letras sequenciais
  let hasSequentialLetters = false;

  // Aqui faço a primeira validação da senha que é saber se ela possui o tamanho de caracter válido
  if (password.length < 16 || password.length > 32) {
    response.errors.push("Tamanho inválido");
  }

  // aqui iniciamos o laço for pra validar caracter por caracter
  for (let i = 0; i <= password.length; i++) {
    // defini uma variável que recebe o valor do índice atual utilizando charAt()
    let actualCharacter = password.charAt(i);
    

    // usei o método find para verificar se o o valor do caracter atual é correspondente
    // a algum caracter especial que esteja dentro do array de caracter especial que criei
    // se o método find retornar true, então existe um caracter especial e o guardarei dentro
    // do array acumulador de caracteres especiais
    if (
      Lists.specialCharactersList.find((element) => element === actualCharacter)
    ) {
      specialCharacter.push(i);
      // console.log(
      //   `Tamanho do array de caracteres especiais: ${specialCharacter}`
      // );
    }

    // usei o método find novamente mas agora para verificar se o caracter atual é estritamente
    // igual a algum caracter da lista de caracteres em maiúsculo que criei, dessa forma eu consigo
    // validar se o caracter está em maiúsculo sem maiores problemas.
    // se o método retornar true, então ele vai guardar no array de caracteres maiúsculos
    // o índice do caracter encontrado.
    if (
      Lists.upperCaseLettersList.find((element) => element === actualCharacter)
    ) {
      upperCaseLetter.push(i);
      // console.log(
      //   `Tamanho do array de letras maiusculas ${upperCaseLetter.length}`
      // );
    }

    // o método faz a mesma coisa que o validador de letras maiúsculas, mas valida letras minúsculas
    if (
      Lists.lowerCaseLettersList.find((element) => element === actualCharacter)
    ) {
      lowerCaseLetter.push(i);
      // console.log(
      //   `Tamanho do array de letras minusculas ${lowerCaseLetter.length}`
      // );
    }

    // criei um laço que valida se existem letras em sequencia na senha
    for (let j = 0; j < password.length; j++) {
      // a condição é: se o número atual do índice (0) somado com 1 for igual ao valor do segundo índice (1)
      // e se o valor atual do indice (0) somado com 2 for igual ao valor do terceiro indice (2)
      // significa que os caracteres são uma sequência de 3 e seta a variável hasSequentialNumbers como true

      if (
        +password[j + 1] == +password[j] + 1 &&
        +password[j + 2] == +password[j] + 2
      ) {
        hasSequentialNumbers = true;
      }
      // logs para localização dos índices
      // console.log(`Valor do caracter atual é: ${password[j]}`);
      // console.log(`Valor do j é: ${j}`);
    }

    for (let l = 0; l < password.length; l++) {
      // o método do charCodeAt() valida o valor unicode da letra, mas letras maiúsculas possuem unicode
      // diferente das mesmas letras, porém minúsculas, então dentro desse for, e somente dentro dele,
      // eu formatei a senha inteira para minúscula para poder fazer a verificação de forma com que funcione
      // caso o usuário insira letras sequenciais utilizando maiúsculas e minúsculas ordenadamente.
      let lowerPassword = password.toLowerCase();

      // esse if funciona da mesma forma que a validação de números sequenciais, mas utilizando letras
      // e para encontrar o valor de uma letra, eu utilizei o método charCodeAt, que verifica o valor da letra
      // com base nos manuais do Unicode.
      // o if verifica se o valor do segundo índice é igual a soma do indice atual + 1 e se o terceiro índice
      // é igual à soma do índice atual + 2, se for, então é uma sequência de letras.

      if (
        lowerPassword.charCodeAt(l + 1) == lowerPassword.charCodeAt(l) + 1 &&
        lowerPassword.charCodeAt(l + 2) == lowerPassword.charCodeAt(l) + 2
      ) {
        hasSequentialLetters = true;
      }
    }
  }

  // esse if verifica se o array de caracteres especiais possui menos que o mínimo, nesse caso 2 caractéres,
  // e se houver, ele insere no acumulador de erros esse retorno de erro.
  if (specialCharacter.length < 2) {
    response.errors.push(
      "A senha deve possuir pelo menos 2 caracteres especiais"
    );
  }

  // esse if verifica se os arrays de letras maiúsculas e minúsculas possuem algum dado,
  // e se não houver ele insere no acumulador de erros esse retorno de erro.
  if (upperCaseLetter.length == 0 || lowerCaseLetter.length == 0) {
    response.errors.push(
      "A senha deve ter pelo menos uma letra maiúscula e uma letra minúscula"
    );
  }

  // esse if verifica se o boolean de números sequenciais é true,
  // e se for ele insere no acumulador de erros o retorno referente a este erro..
  if (hasSequentialNumbers || hasSequentialLetters) {
    response.errors.push("A senha não pode conter caracteres sequenciais");
  }

  // esse if verifica se o tamanho do acumulador de erros é igual
  // a 0 e se for, altera o estado de result para true
  if (response.errors.length == 0) {
    response.result = true;
  }

  return response;
}

var password = "NAOPASSAABC";
console.log(validatePassword(password));
