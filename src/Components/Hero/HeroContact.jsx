// import React from 'react'
import { useState } from 'react'
import { Link } from 'react-scroll';


import './HeroContact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


const Hero = () => {



    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);



        formData.append("access_key", "-----Enter your web3forms key----");

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            setResult(res.message);
            event.target.reset();
        } else {
            console.log("Error", res);
            setResult(res.message);
        }
    };







    return (
        <div className='hero2 container'>

            <div className="hero2-text">
                <h1>We Ensure better education for a better world</h1>
                <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
                {/* <button className='btn'>Explore more </button> */}
                <button className='btn'>
                    <Link to='programs' smooth={true} offset={-250} duration={500}>Explore More</Link>
                </button>

            </div>


            <div className='contact2'>
                <div className="contact2-col">
                    <h3>Send us a Message <img src={msg_icon} alt="" /></h3>
                    <p>If You Want To Contact Us Then Please Fill This Form and Submit.</p>
                    {/* <ul>
                        <li><img src={mail_icon} alt="" />Contact@gmail.com</li>
                        <li><img src={phone_icon} alt="" />+1 123-456-7890</li>
                        <li><img src={location_icon} alt="" />Preschool, Pune</li>
                    </ul> */}
                </div>
                <div className="contact2-col">
                    <form onSubmit={onSubmit}>
                        <label>Student Full Name</label>
                        <input type="text" name='name' placeholder='Enter student name' required />
                        <label>Parent/Guardian Phone Number</label>
                        <input type="tel" name='phone' placeholder='Enter  mobile number' required />
                        <label>Write your messages here</label>
                        <textarea name="message" rows="3" placeholder='Enter your message' required></textarea>
                        <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
                    </form>
                    <span>{result}</span>
                </div>
            </div>


        </div>





    )
}

export default Hero
