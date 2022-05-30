function validatePassword(string){
    let passowrd = string

    var errors = []

    var result = false

    const passowrdIsValid = {result, errors}

    var specialCharacter = []
    
    if(passowrd.length < 16 | passowrd.length > 32 ){
        errors.push('Tamanho inválido')
    }

    for (let i = 1; i <= password.length; i++){
        
        if(password[i] == '?'){
            specialCharacter += i
        }

        if(specialCharacter == 0){
            errors.push('A senha não possui caracteres especiais')
        }

    return passowrdIsValid
    }

    if(passowrdIsValid.errors.length == 0){
        passowrdIsValid.result = true
    }

    return passowrdIsValid
}

var password = '1234?'
console.log(validatePassword(password))
