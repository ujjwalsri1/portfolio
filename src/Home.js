import './App.css';
import Contact from './Contact';

function Home() {
    return (
    <>
    

<section id="header" className="d-flex align-items-center" >
  <div className="container-fluid nav_bg">
    <div className="row">
      
      <div className="col-10 mx-auto">
        <div className="row">
        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
        <h1>Ujjwal Srivastava <strong className="brand-name">Btech CSE</strong> </h1>
        <h2 className="my-3">(Looking for internship opportunities) </h2>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 header-img">
        <img src="217602.jpg" className="img-fluid animated" alt="ujjwal srivastava"></img>
        </div>
        </div>
      </div>

    </div>
  </div>
</section>

<section id="skills">
            <h1 className="section-heading mb75px ">
                <span>
                    <i className="fa fa-user-circle-o"></i>
                </span>
                <span> Profile </span>
            </h1>

                            

<div className="container">
<p className="card-text"> Motivated and dedicated Computer Science Engineering student actively seeking internship opportunities to apply and enhance my technical knowledge and skills. With a passion for problem-solving and a keen interest in software development, I am committed to contributing to innovative projects that push the boundaries of technology.
Throughout my academic journey, I have developed a strong foundation in programming languages such as Python and Java. I have gained hands-on experience in developing and implementing algorithms, data structures and object-oriented design principles . In addition, my coursework has exposed me to various areas of computer science, including database management, web development, and artificial intelligence.
During group projects and team-based activities, I have effectively communicated and collaborated with diverse teams, allowing me to understand the value of teamwork and the importance of effective communication in achieving project goals.
I am adept at breaking down complex challenges into manageable tasks and leveraging my logical thinking abilities to develop efficient and elegant solutions. My passion for continuous learning drives me to stay updated with the latest industry trends and emerging technologies, ensuring that my skills remain relevant and adaptable.
As an intern, I am eager to contribute my skills and knowledge to a dynamic organization where I can actively participate in the development of innovative software solutions. I am confident that my strong work ethic, enthusiasm, and dedication will make me a valuable addition to any team.</p>
</div>


</section>


<section id="experience">
            <h1 className="section-heading mb75px ">
            <span>
                    <i class="fa fa-graduation-cap"></i>
                </span>
                <span> Education </span>
            </h1>
            <div class="timeline">

<div class="timeline-box ">
    <div class="timeline-container">
        <div class="timeline-logo">
        <i class="fa fa-building-o"></i>
        </div>
        <h3 class="experience-designation  m0 m-blue">Jagat <br/>Taran Golden Jubilee School </h3>
        <h4 class="experience-company-name"> CBSE affiliated</h4>
        <h5 class="experience-duration m0">2021 passed out</h5>

        <p class="experience-description text-align-justify">I did my schooling from Jagat Taran Golden Jubilee School with approx 91% in class 10th and 88% in class 12th.The school promises to deliver world- class holistic education to its students. Education, that imparts knowledge by instilling confidence. Students are encouraged to ask questions because they believe that a curious mind is the receptacle of learning. They allow young children to explore ‘the outside’ because learning cannot be confined within the four walls of the classroom.</p>
    </div>
</div>

<div class="timeline-box right ">
    <div class="timeline-container">
        <div class="timeline-logo">
        <i class="fa fa-university"></i>
        </div>
        <h3 class="experience-designation  m0 m-blue"> United <br/>College Of Engineering And Research </h3>
        <h4 class="experience-company-name">AKTU affiliated </h4>
        <h5 class="experience-duration m0"> 2021 - 2025 </h5>
        <p class="experience-description text-align-justify">Currently I am persuing Btech CSE from United College Of Engineering And Research Prayagraj.At United Group of Institution they offers a wide range of popular Courses which provide career opportunities for students, depending on their area of specialization and individual interests.UGI offers NBA accredited courses, Quality recognized by the World Bank and boasts of more than 14000 alumni base. United Group of Institutions, has set extraordinary benchmark in job offers every year, transcending previous records. </p>
    </div>
</div>

<div class="timeline-box left ">
    <div class="timeline-container">
        <div class="timeline-logo">
        <i class="fa fa-server"></i>
        </div>
        <h3 class="experience-designation m0 m-blue">Full Stack <br/>Web Development </h3>
        <h4 class="experience-company-name">In IBM</h4>
        <h5 class="experience-duration m0"> 2022 </h5>

        <p class="experience-description text-align-justify"> I did a IBM Full Stack Web Development Course which was provided by my college in alliance with IBM . In this course I have learned HTML,CSS,JS,Node.js,
        Express,MongoDB also I made a project of login sign up resume page using these technologies.</p>
    </div>
</div>

<div id="timeline-divider">
    <div class="timeline-traveller">
        <div>
            <i class="fa fa-car"></i>
        </div>
    </div>
</div>

</div>

                           

</section>
<section id="skills">
            <h1 className="section-heading mb75px ">
                <span>
                    <i className="fa fa-trophy"></i>
                </span>
                <span> Achievements </span>
            </h1>

                            

<div className="container">
<p className="card-text"> 
<ul class="fa-ul">
    <li><span class="fa-li"><i class="fa fa-check-circle"></i></span>Qualified TCS Codevita Season 10 with a global rank of 5386.</li><br></br>
    <li><span class="fa-li"><i class="fa fa-check-circle"></i></span>Solved 100+ leetcode questlons,5 star on hackerrank (Python,C)</li><br></br>
    <li><span class="fa-li"><i class="fa fa-check-circle"></i></span>Achieved global rank of 56 on Coding Ninja weekly 
competition</li><br></br>
    <li><span class="fa-li"><i class="fa fa-check-circle"></i></span>Participated in a college hackathon on UGl level with 
the project of machine learning.</li><br></br>
    <li><span class="fa-li"><i class="fa fa-check-circle"></i></span>Attended workshops of machine learning,MongoDb and IOT devices.</li><br></br>
    
  </ul>
</p>
</div>


</section>



<section className="hc">

<Contact/>

</section>

</>




    
    
    
        );
};
export default Home;