// const BASE_URL = "http://localhost:4000/api/v1";
const BASE_URL = "https://learn-to-course-backend.onrender.com/api/v1";

// AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: BASE_URL + "/auth/send-otp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
};

// COURSE ENDPOINTS
export const courseEndpoints = {
  GET_ALL_COURSE_API: BASE_URL + "/course/get-courses",
  GET_FULL_COURSE_DETAILS : BASE_URL + '/course/get-course-details',
  EDIT_COURSE_API: BASE_URL + "/course/edit-course",
  CREATE_COURSE_API: BASE_URL + "/course/create-course",
  DELETE_COURSE_API: BASE_URL + "/course/delete-course",

  CREATE_SECTION_API: BASE_URL + "/course/create-section",
  UPDATE_SECTION_API: BASE_URL + "/course/edit-section",
  DELETE_SECTION_API: BASE_URL + "/course/delete-section",

  CREATE_SUBSECTION_API: BASE_URL + "/course/create-subSection",
  UPDATE_SUBSECTION_API: BASE_URL + "/course/edit-subSection",
  DELETE_SUBSECTION_API: BASE_URL + "/course/delete-subSection",
};
