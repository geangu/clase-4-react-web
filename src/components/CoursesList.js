import { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

import { getAllCourses } from '../helpers/api.helper';

const CoursesList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourses = async () => {
      const result = await getAllCourses();
      setCourses(result);
    };
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
        {courses.map((course, index) => (
          <Col xs={6} sm={4} md={3} key={index}>
            <Card>
              <Card.Title>{course.name}</Card.Title>
              <Card.Body>{course.description}</Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CoursesList;
