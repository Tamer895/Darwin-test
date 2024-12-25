import { domain } from "../domain";

export const COURSES_API_ROUTES = {
    CREATE: `${domain}/courses/course/`,
    POST: `${domain}/courses/course/`,
    PATCH: (id) => `${domain}/courses/course/${id}/`,
    PUT: `${domain}/courses/course/`,
    DELETE: `${domain}/courses/delete_course/`,
    GET_ALL: `${domain}/courses/course/`,
    LATEST_COURSES: `${domain}/courses/latest_courses/`,
    GET_BY_ID: `${domain}/courses/course/`,
    SEARCH: `${domain}/courses/search/`,

    CATEGORY_COURSE: `${domain}/courses/category/`,
}