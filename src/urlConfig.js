// const BASE_URL= import.meta.env.VITE_BASE_URL;
const BASE_URL="https://full-stack-app-blond.vercel.app"
const urlConfig = {
    LOGIN_URL:`${BASE_URL}/api/auth/login`,
    SIGNUP_URL:`${BASE_URL}/api/auth/signup`,
    LOGOUT_URL:`${BASE_URL}/api/auth/logout`,
    GET_PRODUCTS_URL:`${BASE_URL}/api/products`,
    GET_CATEGORIES: `${BASE_URL}/api/products/categories`,
}

export default urlConfig;