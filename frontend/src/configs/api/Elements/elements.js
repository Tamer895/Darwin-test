import { domain } from "../domain"

export const ELEMENTS_API_ROUTES = {
    TEXT: {
        CREATE: `${domain}/elements/create-text/`,
        TEXT: `${domain}elements/text/`,
    },
    VIDEO: {
        CREATE: `${domain}/elements/create-video/`,
        VIDEO: `${domain}elements/video/`
    },
    IMAGE: {
        CREATE: `${domain}/elements/create-image/`,
        IMAGE: `${domain}elements/image/`
    },
}