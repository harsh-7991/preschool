// import { useState } from 'react'
import Navbar from "./Components/Navbar/Navbar";
// import Hero from "./Components/Hero/Hero";
import HeroContact from "./Components/Hero/HeroContact";

import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import News from "./Components/News/News";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Result from "./Components/Result/Result";

const App = () => {
	return (
		<div>
			<Navbar />
			{/* <Hero /> */}
			<HeroContact />

			<div className="container">
				<Title subTitle="Our PROGRAM" title="What We Offer" />
				<Programs />
				<About />
				<Title subTitle="News" title="Our Activities" />
				<News />
				<Title subTitle="Gallery" title="Campus Photos" />
				<Result />
				<Title subTitle="Contact Us" title="Get in Touch" />
				<Contact />
				<Footer />
			</div>
		</div>
	);
};

export default App;
