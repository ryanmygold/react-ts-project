//这个文件专门定义请求参数的类型，和响应的类型

//验证码的响应类型约束
interface CaptchaAPIRes {
    msg: string;
    img: string;
    code: number;
    captchaEnabled: boolean;
    uuid: string;
}

//登录请求参数的类型约束
interface LoginAPIReq {
    username: string;
    password: string;
    code: string;
    uuid: string;
}

//登陆的响应类型约束
interface LoginAPIRes {
    msg: string;
    code: number;
    roken: string;
}