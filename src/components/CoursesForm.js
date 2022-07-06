import { useEffect, useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { createCourse, editCourse, getCourse } from '../helpers/api.helper';

const CoursesForm = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [course, setCourse] = useState({});

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
      navigate('/home');
    } else {
      alert('Revisar datos del formulario');
    }
  };

  const getCourseLocal = async (id) => {
    const result = await getCourse(id);
    setCourse(result);
  };

  useEffect(() => {
    const { id } = params;
    if (id) {
      getCourseLocal(id);
    }
  }, [params]);

  return (
    <Form onSubmit={handleSubmit}>
      <FloatingLabel controlId="floatingInput" label="Nombre" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Nombre del curso"
          name="name"
          value={course.name}
          onChange={handleChangeInput}
        />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Descripción"
        className="mb-3"
      >
        <Form.Control
          type="text"
          placeholder="Descripción del curso"
          name="description"
          value={course.description}
          onChange={handleChangeInput}
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput" label="Foto" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Foto del curso"
          name="photo"
          value={course.photo}
          onChange={handleChangeInput}
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput" label="Precio" className="mb-3">
        <Form.Control
          type="number"
          placeholder="0"
          name="price"
          value={course.price}
          onChange={handleChangeInput}
        />
      </FloatingLabel>

      <Button variant="primary" type="button" onClick={() => navigate('/home')}>
        Cancelar
      </Button>
      <Button variant="primary" type="submit">
        Guardar
      </Button>
    </Form>
  );
};

export default CoursesForm;
