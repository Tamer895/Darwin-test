import { domain } from "../domain";

export const USERS_API_ROUTES = {
    PATCH: `${domain}/users/user/`,
    DELETE: `${domain}/users/user/`,
    GET_ALL: `${domain}/users/user/`,
    GET_BY_ID: `${domain}/users/user/`,
    USER_INFO: `${domain}/users/user_info/`,
    LOGOUT: `${domain}/users/logout/`,
    LOGIN: `${domain}/users/login/`,
    REGISTER: `${domain}/users/register/`,
    GET_CODE: `${domain}/users/getcode/`
}