import { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import { deleteCourse, getAllCourses } from '../helpers/api.helper';

const CoursesList = () => {
  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);

  const getCourses = async () => {
    const result = await getAllCourses();
    setCourses(result);
  };

  const handleDelete = async (id) => {
    await deleteCourse(id);
    getCourses();
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
        <Col>
          <Link to="/create">Crear</Link>
        </Col>
      </Row>

      <hr />
      <Row>
        {courses.length === 0 && <h1>No hay cursos</h1>}
        {courses.map((course, index) => (
          <Col xs={6} sm={4} md={3} key={index}>
            <Card>
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/300.png/09f/fff"
              />

              <Card.Title>{course.name}</Card.Title>
              <Card.Body>{course.description}</Card.Body>
              <Card.Footer>
                <Button
                  variant="danger"
                  className="mx-3"
                  onClick={() => handleDelete(course._id)}
                >
                  Delete
                </Button>
                <Button onClick={() => navigate(`/edit/${course._id}`)}>
                  Editar
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CoursesList;
