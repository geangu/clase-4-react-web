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

export const getCourse = async (id) => {
  try {
    const response = await fetch(`${config.API_BASE}/courses/${id}`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const createCourse = async (course) => {
  try {
    const response = await fetch(`${config.API_BASE}/courses/`, {
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(course),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const editCourse = async (course) => {
  try {
    const response = await fetch(`${config.API_BASE}/courses/${course._id}`, {
      headers: {
        'content-type': 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify(course),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const deleteCourse = async (id) => {
  try {
    const response = await fetch(`${config.API_BASE}/courses/${id}`, {
      headers: {
        'content-type': 'application/json',
      },
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
};
