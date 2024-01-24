import About from "./About";
import Contact from "./Contact";
import Experience from "./Skills";
import Home from "./Home";
import NavBar from "./NavBar";
import Portfolio from "./Portfolio";
import SocialLinks from "./SocialLinks";
import Skills from "./Skills";
import bg from "../assets/bg.jpg"
import bg2 from "../assets/bg2.jpg"


const Layout = () => {
    // Your background image style here
    const backgroundImageStyle = {
        backgroundImage: `url(${bg2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh", // Ensure the background covers the entire viewport height
    };

    return (
        <div style={backgroundImageStyle}>
            <NavBar />
            <Home />
            <About />
            <Portfolio />
            <Skills />
            <Contact />
            <SocialLinks />
        </div>
    );
};

export default Layout;
