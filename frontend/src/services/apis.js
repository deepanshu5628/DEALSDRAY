import dotenv from "dotenv";
// dotenv.config();
// const BASE_URL=process.env.REACT_APP_BASE_URL;
const BASE_URL="http://localhost:3000";

const BASE_URL_ADMIN=BASE_URL+"/api/v1/admin";
const BASE_URL_EMPLOYEE=BASE_URL+"/api/v1/employee";

export const admin={
    LOGIN_API:BASE_URL_ADMIN+"/login",
    CREATEEMPLOYEE_API:BASE_URL_ADMIN+"/createadmin",
}

export const employee={
    EMPLOYEE_CREATE_API:BASE_URL_EMPLOYEE+"/createemployee",
}