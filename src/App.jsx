import ServiceSection from './components/ServiceSection';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import StudyAbroad from './components/StudyAbroad';
import Scholarship from './components/Scholarship';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
const App = () => {
  return (
    <>
    <Navbar/>
    <div className="mx-auto pt-28 px-6">

    <HeroSection/>
    <ServiceSection/>
    <StudyAbroad/>
    <Scholarship/>
    <Testimonials/>
    <Footer/>
    </div>
    </>
  )
}

export default App