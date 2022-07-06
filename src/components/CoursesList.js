import { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

import {
  getAllCourses,
  createCourse,
  deleteCourse,
  editCourse,
} from '../helpers/api.helper';

const CoursesList = () => {
  const [courses, setCourses] = useState([]);

  const [course, setCourse] = useState({
    _id: null,
    name: '',
    description: '',
    photo: '',
    price: 0,
  });

  const getCourses = async () => {
    const result = await getAllCourses();
    setCourses(result);
  };

  const handleEdit = async (_course) => {
    console.log(_course);
    setCourse({ ..._course });
  };

  const handleDelete = async (id) => {
    await deleteCourse(id);
    getCourses();
  };

  const handleChangeInput = (e) => {
    setCourse({
      ...course,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (course.name && course.description) {
      if (course._id) {
        await editCourse(course);
      } else {
        await createCourse(course);
      }
      setCourse({
        name: '',
        description: '',
        photo: '',
        price: 0,
      });
      getCourses();
    } else {
      alert('Revisar datos del formulario');
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <>
      <Row>
        <Col>
          <h1>Courses</h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Nombre</label>
              <input
                type="text"
                name="name"
                value={course.name}
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <label>Description</label>
              <input
                type="text"
                name="description"
                value={course.description}
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <label>Foto</label>
              <input
                type="text"
                name="photo"
                value={course.photo}
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <label>Precio curso</label>
              <input
                type="number"
                name="price"
                value={course.price}
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <button type="submit">Guardar</button>
            </div>
          </form>
        </Col>
      </Row>
      <hr />
      <Row>
        {courses.map((course, index) => (
          <Col xs={6} sm={4} md={3} key={index}>
            <Card>
              <Card.Title>{course.name}</Card.Title>
              <Card.Body>{course.description}</Card.Body>
              <Card.Footer>
                <button onClick={() => handleDelete(course._id)}>Delete</button>
                <button onClick={() => handleEdit(course)}>Editar</button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CoursesList;
