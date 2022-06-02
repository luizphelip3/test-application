import { validatePassword, Response } from '.';

describe('PasswordValidator', () => {
    // aqui eu instanciei o tipo do sut (system under test) como o Response, o tipo criado no index.ts 
    // que é um objeto que possui result e errors
  let sut: Response;

  // a notação beforeEach seta o valor de sut antes de todos os testes, passei o valor do sut como
  // o default de Response
  beforeEach(() => {
    sut = {
      result: false,
      errors: ['']
    }
  })

  test('Deve passar se o tamanho da senha for menor que 16', () => {
      // defini o valor de error igual o valor do erro do index.ts
    const error = 'Tamanho inválido'
    // instanciei a função validatePassword como valor do sut e passei como parâmetro
    // uma senha menor que 16
    sut = validatePassword('!Senha!')
    // 
    const { result, errors } = sut
    expect(result).toEqual(false)
    expect(errors).toEqual([error])
  })
})