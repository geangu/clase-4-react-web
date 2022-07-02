import config from '../config';

export const getAllCourses = async () => {
  try {
    const response = await fetch(`${config.API_BASE}/courses`);
    const data = await response.json();
    return data.courses;
  } catch (e) {
    console.log(e);
    return [];
  }
};
