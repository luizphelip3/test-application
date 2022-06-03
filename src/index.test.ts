import { validatePassword, Response } from ".";

describe("PasswordValidator", () => {
  // aqui eu instanciei o tipo do sut (system under test) como o Response, o tipo criado no index.ts
  // é um objeto que possui result e errors
  let sut: Response;

  // a notação beforeEach seta o valor de sut antes de cada teste, passei o valor do sut como
  // o default de Response (result como false e o array de errors vazio)
  beforeEach(() => {
    sut = {
      result: true,
      errors: [],
    };
  });

  test("Deve passar se o tamanho da senha for menor que 16", () => {
    // defini o valor de error igual o valor da validação desse erro do index.ts
    const error = "Tamanho inválido";
    // instanciei a variável sut recebendo a função de validaçãode senha e passei como parâmetro
    // uma senha menor que 16
    sut = validatePassword("!Senha!");
    // aqui desestruturei o objeto de sut passando os valores do objeto que vou utilizar
    const { result, errors } = sut;

    // aqui defini os valores esperados das propriedades de sut
    expect(result).toEqual(false);
    expect(errors).toEqual([error]);
  });

  test("Deve passar se o tamanho da senha for maior que 32", () => {
    // defini o valor de error igual o valor da validação desse erro do index.ts
    const error = "Tamanho inválido";
    // instanciei a variável sut recebendo a função de validaçãode senha e passei como parâmetro
    // uma senha maior que trinta e dois
    sut = validatePassword(
      "!Senha!QuePossuiMuitoMaisDoQueTrintaeDoisCaractéres!"
    );
    // aqui desestruturei o objeto de sut passando os valores do objeto que vou utilizar
    const { result, errors } = sut;

    // aqui defini os valores esperados das propriedades de sut
    expect(result).toEqual(false);
    expect(errors).toEqual([error]);
  });

  test("Deve passar se a senha não tiver a quantidade de caractéres especiais necessários", () => {
    // defini o valor de error igual o valor da validação desse erro do index.ts
    const error = "A senha deve possuir pelo menos 2 caracteres especiais";
    // instanciei a variável sut recebendo a função de validação de senha e passei como parâmetro
    // uma senha que não tenha dois caractéres especiais
    sut = validatePassword("!MenosDoQue2CaracteresEspeciais");
    // aqui desestruturei o objeto de sut passando os valores do objeto que vou utilizar
    const { result, errors } = sut;

    // aqui defini os valores esperados das propriedades de sut
    expect(result).toEqual(false);
    expect(errors).toEqual([error]);
  });

  test("Deve passar se a senha tiver caractéres especiais", () => {
    // defini o valor de error igual o valor da validação desse erro do index.ts
    const error = "A senha não pode conter caracteres sequenciais";
    // instanciei a variável sut recebendo a função de validação de senha e passei como parâmetro
    // uma senha que tenha letras sequenciais
    sut = validatePassword("!!TesteDeSequencialDEfc");
    // aqui desestruturei o objeto de sut passando os valores do objeto que vou utilizar
    const { result, errors } = sut;

    // aqui defini os valores esperados das propriedades de sut
    expect(result).toEqual(false);
    expect(errors).toEqual([error]);
  });

  test("Deve passar se a senha não tiver letras minúsculas", () => {
    // defini o valor de error igual o valor da validação desse erro do index.ts
    const error = "A senha deve ter pelo menos uma letra maiúscula e uma letra minúscula";
    // instanciei a variável sut recebendo a função de validação de senha e passei como parâmetro
    // uma senha que não tenha letras minúsculas
    sut = validatePassword("!!TESTEDEMINUSCULAS");
    // aqui desestruturei o objeto de sut passando os valores do objeto que vou utilizar
    const { result, errors } = sut;

    // aqui defini os valores esperados das propriedades de sut
    expect(result).toEqual(false);
    expect(errors).toEqual([error]);
  });

  test("Deve passar se a senha não tiver letras maiúsculas", () => {
    // defini o valor de error igual o valor da validação desse erro do index.ts
    const error = "A senha deve ter pelo menos uma letra maiúscula e uma letra minúscula";

    // instanciei a variável sut recebendo a função de validação de senha e passei como parâmetro
    // uma senha que não tenha letras maiúsculas
    sut = validatePassword("!!testedemaiusculas");

    // aqui desestruturei o objeto de sut passando os valores do objeto que vou utilizar
    const { result, errors } = sut;

    // aqui defini os valores esperados das propriedades de sut
    expect(result).toEqual(false);
    expect(errors).toEqual([error]);
  });

  test("Deve passar se a senha não se encaixar em nenhum parâmetro", () => {
    // defini o valor de error igual o valor da validação desse cenário de erro do index.ts
    const error = ['Tamanho inválido',
    'A senha deve possuir pelo menos 2 caracteres especiais',
    'A senha deve ter pelo menos uma letra maiúscula e uma letra minúscula',
    'A senha não pode conter caracteres sequenciais'];
    
    // instanciei a variável sut recebendo a função de validação de senha e passei como parâmetro
    // uma senha que não tenha se falhe em todos os casos
    sut = validatePassword("NAOPASSARAABC");

    // aqui desestruturei o objeto de sut passando os valores do objeto que vou utilizar
    const { result, errors } = sut;

    // aqui defini os valores esperados das propriedades de sut
    expect(result).toEqual(false);
    expect(errors).toEqual(error);
  });

  test("Deve passar se a senha for válida", () => {
    
    // instanciei a variável sut recebendo a função de validação de senha e passei como parâmetro
    // uma senha que seja válida
    sut = validatePassword("S3nh@Ma!sDoQueVálida!");

    // aqui desestruturei o objeto de sut passando os valores do objeto que vou utilizar
    const { result, errors } = sut;

    // aqui defini os valores esperados das propriedades de sut
    expect(result).toEqual(true);
    expect(errors).toEqual([]);
  });

});
