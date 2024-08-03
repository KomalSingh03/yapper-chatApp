// export const HOST = import.meta.env.VITE_SERVER_URL;

// export const AUTH_ROUTES ="api/auth";

// export const SIGNUP_ROUTE = `${AUTH_ROUTES}/signup`;

// export const HOST = import.meta.env.VITE_SERVER_URL;
// export const SIGNUP_ROUTE = `${HOST}/api/auth/signup`;
export const HOST = import.meta.env.VITE_SERVER_URL || "http://localhost:3001"; // Ensure this matches your server URL

export const AUTH_ROUTES = `${HOST}/api/auth`;

export const SIGNUP_ROUTE = `${AUTH_ROUTES}/signup`;

