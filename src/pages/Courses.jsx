import Welcome from '../components/0-Header/Header';
import CourseCard from '../components/Courses-section/CourseCard';
import { Layout } from '../layout/Layout';
const Courses = () => {
    return (
      <Layout>
        <Welcome />
        <CourseCard />
      </Layout>
       
    
      
    );
  };
  
  export default Courses;