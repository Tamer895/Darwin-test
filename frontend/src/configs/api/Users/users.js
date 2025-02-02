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
    GET_CODE: `${domain}/users/getcode/`,
    FORGOT_PASSWORD: `${domain}/users/forgot_password/`,
    RESET_PASSWORD: `${domain}/users/reset_password/`,
    ADD_TO_MY_COURSES: `${domain}/users/add-to-my-courses/`
}