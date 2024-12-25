import { domain } from "../domain";

export const ANNOUNCEMENTS_API_ROUTES = {
    CREATE: `${domain}/announcements/announcement/`, // Создание
    POST: `${domain}/announcements/announcement/`,   // Создание (дублируется с CREATE)
    PATCH: (id) => `${domain}/announcements/announcement/${id}/`, // Обновление по ID
    PUT: (id) => `${domain}/announcements/announcement/${id}/`,   // Полное обновление по ID
    DELETE: (id) => `${domain}/announcements/announcement/${id}/`, // Удаление по ID
    GET_ALL: `${domain}/announcements/announcement/`, // Получение всех
    GET_BY_ID: (id) => `${domain}/announcements/announcement/${id}/`, // Получение по ID
};
