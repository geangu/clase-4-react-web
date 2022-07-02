import { Container } from 'react-bootstrap';
import CoursesList from '../components/CoursesList';
import Header from '../components/Header';

const Home = () => {
  return (
    <Container>
      <Header />
      <CoursesList />
    </Container>
  );
};

export default Home;
