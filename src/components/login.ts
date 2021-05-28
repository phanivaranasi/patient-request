export class LoginModel{
    userName:string="King";
}

export class LoginComponent{
    constructor(){
        return {
            viewModel:LoginModel,
            template:require('../templates/login.html')
        }
    }
}