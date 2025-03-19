import { useRef } from 'react'
import './News.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import activities_1 from '../../assets/activities_1.jpg'
import activities_2 from '../../assets/activities_2.jpg'
import activities_3 from '../../assets/activities_3.jpg'
import activity_4 from '../../assets/activity_4.webp'

const News = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    return (
        <div className='news'>
            <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="info">
                                <img src={activities_1} alt="" />
                                <div>
                                    <h3>Kids Dance Class in Action</h3>

                                </div>
                            </div>
                            <p>Here, our young learners, dressed in their school uniforms, are fully engaged in a dynamic dance session within our dedicated dance studio. Under the guidance of our experienced instructors, students explore various dance styles, develop coordination, and express their creativity.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="info">
                                <img src={activities_2} alt="" />
                                <div>
                                    <h3>Creative Exploration Outdoors: Our School Art & Craft Activity</h3>

                                </div>
                            </div>
                            <p>This image captures a delightful outdoor art and craft session, showcasing the engaging activities our school offers to its students. In this scene, a group of young children are gathered around their teacher, participating in a hands-on creative experience</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="info">
                                <img src={activities_3} alt="" />
                                <div>
                                    <h3>Our Cultural Gathering</h3>

                                </div>
                            </div>
                            <p>This captivating image captures the culmination of our school dance program, showcasing the talent and dedication of our students in a grand performance. The photograph depicts a group of young dancers, dressed in traditional Indian attire, performing on a brightly lit stage.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="info">
                                <img src={activity_4} alt="" />
                                <div>
                                    <h3>Exploring the Future of Technology</h3>

                                </div>
                            </div>
                            <p>Through our coding, robotics, and technology workshops, we introduce students to the fundamental concepts that drive advancements in AI and related fields. We believe in preparing our students for the future, where understanding and interacting with technology will be crucial</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default News
