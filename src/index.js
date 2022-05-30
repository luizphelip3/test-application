function validatePassword(string){

    var errors = []

    var result = false

    const passowrdIsValid = {result, errors}

    let passowrd = string
    
    if(passowrd.length < 16 | passowrd.length > 32 ){
        errors.push('Tamanho inválido')
    }

    for (let i = 1; i <= password.length; i++){
        
       console.log(passowrd.indexOf(i)) 
    
    }

    if(passowrdIsValid.errors.length == 0){
        passowrdIsValid.result = true
    }

    return passowrdIsValid
}

var password = '1234'
console.log(validatePassword(password))
