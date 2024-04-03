
import './App.css';

import { Route, Routes } from "react-router-dom";

import Header from './components/Header';
import Profile from './components/Profile';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';
import Menubar from './components/Menubar';
// import CardTransParentLayoutBg from './components/CardTransParentLayoutBg';
// import { useEffect, useState } from 'react';

function App() {

  // const projects = [
  //   {
  //     "title": "MY WORK",
  //     "topic": "ShopIT",
  //     "project": "E-commerce Website",
  //     "description": <ul>
  //       <li>ShopIt is e-commerece application. It is very useful for seller and customer.</li>
  //       <li>Customer can be easy to buy the Products and delivery to home.</li>
  //     </ul>,
  //     "website": "https://kind-gold-rooster-wig.cyclic.app/",
  //     "domain": " www.ShopIT.com",
  //     "github": "https://github.com/dineshk281800/ShopIt",
  //     "language": "React, Express, MongoDB, NodeJS",
  //     "image": "./image/shopit.png",
  //     "image2": "./image/shopping.jpg",
  //     "level": "Advance"
  //   },
  //   {
  //     "title": "MY WORK",
  //     "topic": "Destination App",
  //     "project": "Delivery Website",
  //     "description": <ul>
  //       <li>The destination calculator will provide you with a brief destination path
  //         as well as the date your package will arrive at its destination.</li>
  //     </ul>,
  //     "website": "https://destination-date281800.netlify.app/",
  //     "domain": " www.destination.com",
  //     "github": "https://github.com/dineshk281800/destination-date",
  //     "language": "HTML, CSS, JavaScript",
  //     "image": "./image/delivery.png",
  //     "level": "Intermediate"
  //   },
  //   {
  //     "title": "MY WORK",
  //     "topic": "Tip Calculator",
  //     "project": "Calculator Website",
  //     "description": <ul>
  //       <li>Tip calculator will tip the bills with
  //         different percentage for the users. </li>
  //     </ul>,
  //     "website": "https://tip-calculator281800.netlify.app/",
  //     "domain": " www.tip-calculator.com",
  //     "github": "https://github.com/dineshk281800/tip-calculator",
  //     "language": "HTML, CSS, JavaScript",
  //     "image": "./image/TipCalculator.png",
  //     "level": "Intermediate"
  //   },
  //   {
  //     "title": "MY WORK",
  //     "topic": "Rock Paper Scissors",
  //     "project": "Entertainment Website",
  //     "description": <ul>
  //       <li>This project is a web-based implementation of the classNameic Rock Paper Scissors game. Users can interact with the game through an intuitive interface, playing against the computer. </li>
  //     </ul>,
  //     "website": "https://rock-paper-scissors281800.netlify.app/",
  //     "domain": " www.Rock-Paper-Scissor.com",
  //     "github": "https://github.com/dineshk281800/rock-paper-scissor",
  //     "language": "HTML, CSS, JavaScript",
  //     "image": "./image/RockPaperScissor.png",
  //     "level": "Intermediate"
  //   },
  //   {
  //     "title": "MY WORK",
  //     "topic": "Guess My Number",
  //     "project": "Entertainment Website",
  //     "description": <ul>
  //       <li>I Creating entertaining games build with HTML, CSS and JavaScript. </li>
  //       <li>In this game, System generate random number within the limit and you guess that random number.</li>
  //     </ul>,
  //     "website": "https://guess-my-number281800.netlify.app/",
  //     "domain": " www.Guess-My-Number.com",
  //     "github": "https://github.com/dineshk281800/guess-my-number",
  //     "language": "HTML, CSS, JavaScript",
  //     "image": "./image/GuessNumber.png",
  //     "level": "Intermediate"
  //   },
  //   {
  //     "title": "MY WORK",
  //     "topic": "Weather App",
  //     "project": "Weather Casting Website",
  //     "description": <ul>
  //       <li>Utilizing React's component-based architecture to create a dynamic and user-friendly interface. </li>
  //       <li>Fetching real-time weather data from a weather API like OpenWeatherMap or Weather Underground. </li>
  //       <li>Users can search for weather information based on city name. </li>
  //     </ul>,
  //     "website": "https://weather-app281800.netlify.app/",
  //     "domain": " www.weather-app.com",
  //     "github": "https://github.com/dineshk281800/weather",
  //     "language": "React",
  //     "image": "./image/Weather.png",
  //     "level": "Intermediate"
  //   },
  //   {
  //     "title": "MY WORK",
  //     "topic": "LinkedIn Clone",
  //     "project": "Social-Media Website ",
  //     "description": <ul>
  //       <li>I create a basic LinkedIn UI with responsiveness using media query. </li>
  //     </ul>,
  //     "website": "https://linkedin-website-clone281800.netlify.app/",
  //     "domain": " www.LinkedIn-clone.com",
  //     "github": "https://github.com/dineshk281800/LinkedIn-Clone-website",
  //     "language": "HTML, CSS",
  //     "image": "./image/LinkedInImg.png",
  //     "level": "Beginner"
  //   },
  //   {
  //     "title": "MY WORK",
  //     "topic": "YouTube Clone",
  //     "project": "Social-Media Website",
  //     "description": <ul>
  //       <li>I create a basic YouTube UI with responsiveness using media query. </li>
  //     </ul>,
  //     "website": "https://youtube-clone-in.netlify.app/",
  //     "domain": " www.YouTube-clone.com",
  //     "github": "https://github.com/dineshk281800/youtube",
  //     "language": "HTML, CSS",
  //     "image": "./image/YoutubeImg.png",
  //     "level": "Beginner"
  //   },
  //   {
  //     "title": "MY WORK",
  //     "topic": "Digital Clock",
  //     "description": <ul>
  //       <li>Building interactive user interfaces with HTML, CSS and Utilizing JavaScript for dynamic content updates and functionality.</li>
  //       <li>Working with JavaScript's Date object to retrieve and display the current time. </li>
  //     </ul>,
  //     "website": "https://digital-watch-clock281800.netlify.app/",
  //     "domain": " www.Digital-Clock.com",
  //     "github": "https://github.com/dineshk281800/digital-clock",
  //     "language": "HTML, CSS, JavaScript",
  //     "image": "./image/DigitalWatch.png",
  //     "level": "Beginner"
  //   },
  // ]
  // const projectslevel = ["All", "Beginner", "Intermediate", "Advance"]

  // const [allWorks, setAllWorks] = useState([])
  // const [filteredWork, setFilteredWork] = useState([]);
  // const [show, setShow] = useState([]);

  // // console.log(show)

  // let filteringWork = allWorks
  // const [workLevel, setWorkLevel] = useState("All");

  // const showHandler = (topic) => {
  //   setShow(filteringWork.filter(project => topic === (project.topic)))
  // }

  // const filtering = () => {
  //   if (workLevel === "All") {
  //     filteringWork = projects
  //     // console.log("all", workLevel)
  //     // console.log(filteringWork)
  //   }
  //   if (workLevel !== "All") {
  //     filteringWork = filteringWork.filter(project => workLevel === (project.level))
  //   }

  //   setFilteredWork(filteringWork)
  // }

  // const filterProjectHandler = (value) => {
  //   setWorkLevel(value);
  // }
  // // console.log(filteredWork);

  // useEffect(() => {
  //   setAllWorks(projects)
  //   setFilteredWork(projects)
  // }, [])

  // useEffect(() => {
  //   filtering()
  // }, [workLevel])
  return (
    <>
      <div className='bg'>
        <div className='page-wrapper home-1'>
          <Header />

          <div className="container z-index-3">
            <div className="row">
              <div className="col-xxl-3 col-xl-3">
                <Profile />
              </div>
              <div className="col-xxl-8 col-xl-9">
                <Routes>
                  <Route path="/" element={<About />} />
                  {/* <Route path="/works" element={<Works projects={projects} projectslevel={projectslevel} workLevel={workLevel} filterProjectHandler={filterProjectHandler} filteredWork={filteredWork} showHandler={showHandler} />} /> */}
                  <Route path="/works" element={<Works />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
                {/* {show.length ? <CardTransParentLayoutBg show={show} setShow={setShow} /> : ""} */}
              </div>
              <div className="col-xxl-1 d-xxl-block d-none">
                <Menubar />
              </div>
            </div>
          </div>
        </div>

        {/* <CardTransParentLayoutBg /> */}
      </div>
    </>
  );
}

export default App;
