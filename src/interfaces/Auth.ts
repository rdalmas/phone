interface LoginInput {
    username: string;
    password: string;
}

type UserType = {
    id: string;
    username: string;
}
  
interface AuthResponseType {
    access_token: string;
    refresh_token: string;
    user: UserType;
}

interface DeprecatedAuthResponseType {
    access_token: string;
    user: UserType;
}

export type {
    LoginInput,
    UserType,
    AuthResponseType,
    DeprecatedAuthResponseType,
}