import './About.css'
// import about_img from '../../assets/about.png'
import about from '../../assets/about.jpg'


const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about} alt="" className='about-img'/>
  
      </div>
      <div className="about-right">
        <h3>ABOUT OUR SCHOOL</h3>
        <h2>Shaping Bright Futures</h2>
        <p>Experience a nurturing and stimulating learning environment where young minds thrive. Our school is committed to providing quality education that fosters academic excellence, personal growth, and social responsibility.</p>
        <p>Our dedicated educators create an engaging and supportive atmosphere that encourages students to explore their potential. Through interactive lessons, hands-on activities, and a well-rounded curriculum, we ensure a balanced approach to learning</p>
        <p>We emphasize critical thinking, creativity, and leadership skills, preparing students for success in higher education and beyond. By integrating modern teaching methodologies and technology, we make learning more effective and enjoyable.</p>
        
      </div>
    </div>
  )
}

export default About
