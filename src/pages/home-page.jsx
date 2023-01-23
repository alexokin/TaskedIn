import { AppHeader } from "../cmps/app-header"
import { AppFooter } from "../cmps/app-footer"

export function HomePage() {

  return <section className="home-page">
    <AppHeader />
    <main>

      <section className="signup-main-section">
        <section className="signup-sub-section">
          <div className="left-signup-sub">
            <h1 className="left-signup-h1">TaskedIn brings all your tasks, teammates, and tools together</h1>
            <p className="left-signup-p">Keep everything in the same place—even if your team isn't.</p>
            <div className="left-signup-div">
              <input className="signin-input" type="text" placeholder="Email" />
              <button className="signin-btn"><a href="/workspace" className="signin-a">Let's Tasked it Now!</a></button>
            </div>
          </div>
          <div className="right-signup-sub-section">
            <img className="ui-img" src={require(`../assets/img/trello-ui-collage.webp`)} alt="ui home page picture" />
          </div>
        </section>
      </section>

      <section className="productivity-powerhouse-section">
        <div className="productivity-powerhouse-div">
          <p className="powerhouse-div-p">TRELLO 101</p>
          <h2 className="powerhouse-div-h2">A Productivity powerhouse</h2>
        </div>
        <p className="powerhouse-div-p2">Simple, flexible, and powerful. All it takes are boards, lists, and cards to get a clear view of whos doing what and what needs to get done. Learn more in our <a href="" className="powerhouse-link">guide for getting started.</a></p>
      </section>

      <section className="ui-main-section">
        <section className="ui-sub-section">
          <section className="left-sub-section">
            <section className="left-center-sub">
              <button className="left-card-button">
                <div className="left-button-div">
                  <h3 className="left-button-h3">Boards</h3>
                  <p className="left-button-p">TaskedIn boards keep tasks organized and work moving forward. In a glance, see everything from “things to do” to “aww yeah, we did it!”</p>
                </div>
              </button>
              <button className="ui-button">
                <div className="left-ui-div">
                  <h3 className="left-button-h3">Lists</h3>
                  <p className="left-button-p">The different stages of a task. Start as simple as To Do, Doing or Done—or build a workflow custom fit to your team’s needs. There’s no wrong way to TaskedIn.</p>
                </div>
              </button>
              <button className="ui-button cards">
                <div className="left-ui-div">
                  <h3 className="left-button-h3">Cards</h3>
                  <p className="left-button-p">Cards represent tasks and ideas and hold all the information to get the job done. As you make progress, move cards across lists to show their status.</p>
                </div>
              </button>
            </section>
          </section>
        </section>
        <section className="right-sub-section">
          <img className="ui-img" src={require(`../assets/img/trello-ui-boards-lists-cards.jpg`)} alt="trello-ui-boards-lists-cards img" />
        </section>
      </section>

      <section className="empty-space-section"></section>

      <section className="templates-main-section">
        <div className="templates-designed-div">
          <p className="templates-div-p">A BLUEPRINT FOR SUCCESS</p>
          <h2 className="templates-div-h2">Templates designed for any team</h2>
        </div>
      </section>

      <div className="carousel-controller">
        <a href="" className="arrow"><img className="img-arrow" src={require(`../assets/img/left.png`)} alt="" /></a>
        <a href="" className="arrow"><img className="img-arrow" src={require(`../assets/img/next.png`)} alt="" /></a>
      </div>

      <div className="carousel-main-section">
        <div className="carousel-section">

          <div className="carousel-square">
            <div className="header-carousel-square"><img className="header-carousel-square" src={require(`../assets/img/background1.jpg`)} alt="trello-ui-boards-lists-cards img" />
              <div className="logo-carousel square"></div>
            </div>
            <div className="bottom-carousel-square">
              <h3 className="carousel-square-h3">Project Management  <br></br>Tamplate</h3>
              <span className="carousel-square-span">by TaskedIn Marketing Team</span>
              <p className="carousel-square-p">Big dreams turn into bigger results with a project plan. Use this template to build your team's ideal workflow, for projects big or small.</p>
            </div>
          </div>

          <div className="carousel-square">
            <div className="header-carousel-square"><img className="header-carousel-square" src={require(`../assets/img/background2.jpg`)} alt="trello-ui-boards-lists-cards img" />
              <div className="logo-carousel square"></div>
            </div>
            <div className="bottom-carousel-square">
              <h3 className="carousel-square-h3">Product Roadmap Template</h3>
              <span className="carousel-square-span">by TaskedIn Marketing Team</span>
              <p className="carousel-square-p">Use the TaskedIn product roadmap template to track product development and feature requests, and collaborate on development processes."</p>
            </div>
          </div>

          <div className="carousel-square">
            <div className="header-carousel-square"><img className="header-carousel-square" src={require(`../assets/img/background3.jpg`)} alt="trello-ui-boards-lists-cards img" />
              <div className="logo-carousel man"></div>
            </div>
            <div className="bottom-carousel-square">
              <h3 className="carousel-square-h3">Task Management Template</h3>
              <span className="carousel-square-span">by Mitchell Fry, Engineer @ Oliver <br></br>Wyman</span>
              <p className="carousel-square-p">Easily keep track of what you’ve done, what you have to do, and when you have to do it with this TaskedIn task management template.</p>
            </div>
          </div>

          <div className="carousel-square">
            <div className="header-carousel-square"><img className="header-carousel-square" src={require(`../assets/img/background4.jpeg`)} alt="trello-ui-boards-lists-cards img" />
              <div className="logo-carousel hugo"></div>
            </div>
            <div className="bottom-carousel-square">
              <h3 className="carousel-square-h3">Meeting Agenda Template</h3>
              <span className="carousel-square-span">by Darren Chait, Co-Founder @ Hugo</span>
              <p className="carousel-square-p">Great meetings require planning. Use this TaskedIn template as the framework for more effective, collaborative team meetings.</p>
            </div>
          </div>

          <div className="carousel-square">
            <div className="header-carousel-square"><img className="header-carousel-square" src={require(`../assets/img/background4.jpg`)} alt="trello-ui-boards-lists-cards img" />
              <div className="logo-carousel moisson"></div>
            </div>
            <div className="bottom-carousel-square">
              <h3 className="carousel-square-h3">Social Media Marketing<br></br>Tamplate</h3>
              <span className="carousel-square-span">by Moisson Marketing</span>
              <p className="carousel-square-p">From generating ideas to planning your release schedule, use this TaskedIn social media template to manage everything in one place.</p>
            </div>
          </div>

          <div className="carousel-square">
            <div className="header-carousel-square"><img className="header-carousel-square" src={require(`../assets/img/rainbow.jpg`)} alt="trello-ui-boards-lists-cards img" />
              <div className="logo-carousel square"></div>
            </div>
            <div className="bottom-carousel-square">
              <h3 className="carousel-square-h3">Kanban Template</h3>
              <span className="carousel-square-span">by TaskedIn Engineering Team</span>
              <p className="carousel-square-p">Use this simple Kanban template to improve the productivity of your engineering team and help them build better products, faster.</p>
            </div>
          </div>

        </div>
      </div>

      <div className="explore-main-section">
        <div className="left-explore-section">
          <p className="left-explore-p">No need to start from scratch. Jump start your board with tried-and-true templates, then customize it to make it your own.</p>
        </div>
        <div className="right-explore-section">
          <a href=""><span>Explore all Templates</span></a>
        </div>
      </div>

      <section className="see-main-section">
        <div className="see-sub-section">
          <h2 className="see-sub-h2">See work in a whole new way</h2>
          <p className="see-sub-p">View your teams projects from every angle and bring a fresh perspective to the task at hand.</p>
          <a href="" className="discover-btn"><span>Discover all TaskedIn views</span></a>
        </div>

        <section className="centered-main">
          <div className="img-div">
            <img className="left-img-section" src={require(`../assets/img/trello hit deadlines.jpg`)} alt="left-img-section" />
          </div>
          <section className="right-first-centered">
            <img className="svg-lines" src={require(`../assets/img/hit-logo.jpg`)} alt="svg lines" />
            <h3 className="h3-right">HIT DEADLINES EVERY TIME</h3>
            <p className="p-right">From weekly sprints to annual planning, Timeline view keeps all tasks on track. <br></br>Quickly get a glimpse of whats coming <br></br>down the pipeline and identify any gaps <br></br> that might impede your teams progress.</p>
            <a href="" className="a-right">Learn more about Timeline view</a>
          </section>
        </section>

        <section className="centered-main">
          <section className="right-first-centered">
            <img className="calendar" src={require(`../assets/img/calendar.jpg`)} alt="svg calendar" />
            <h3 className="h3-left">Stay on top of tasks</h3>
            <p className="p-left">Start each day without any surprises. Whether scheduling an editorial calendar or staying on top of to-dos, Calendar view is like a crystal ball giving you a clear vision of what work lies ahead.</p>
            <a href="" className="a-left">Learn more about Calendar view</a>
          </section>
          <div className="img-div">
            <img className="right-img-section" src={require(`../assets/img/trello-stay-on-top-of-tasks.jpg`)} alt="right-img-second-centered-sub-section" />
          </div>
        </section>
      </section>

{/* 
      <section className="home-page-empty-space-section"></section>
      <section className="home-page-empty-space-section"></section>

      <section className="do-more-with-trello-section">
        <div className="left-do-more-with-trello-section">
          <p className="first-p-left-do-more-with-trello-section">Powerful ways to grow</p>
          <h2 className="h2-left-do-more-with-trello-section">Do more with TaskedIn</h2>
          <p className="second-p-left-do-more-with-trello-section">TaskedIn’s intuitive features give any team the ability to quickly set up and customize workflows for just about anything.</p>
        </div>
      </section>

      <section className="integrations-butler-enterprise-main-section">
        <div className="trello-enterprise-main-div">
          <div className="trello-enterprise-sub-div">
            <div className="trello-enterprise-small-div">
              <img src="../assets/img/Search_Value.svg" alt="trello-enterprise-img" />
              <h3>TaskedIn Enterprise</h3>
              <p>The productivity tool teams love, paired with the features and security needed for scale.</p>
              <div>
                <a href=""><span>Explore Enterprise</span></a>
              </div>
            </div>
          </div>
        </div>
        <div className="butler-automation-main-div">
          <div className="butler-automation-sub-div">
            <div className="butler-automation-small-div">
              <img src="../assets/img/Search_Value.svg" alt="butler-automation-img" />
              <h3>Butler Automation</h3>
              <p>No-code automation is built into every TaskedIn board. Focus on the work that matters most and let the robots do the rest.</p>
              <div>
                <a href="../assets/img/butler-automation.svg"><span>Get to know Automation</span></a>
              </div>
            </div>
          </div>
        </div>
        <div className="integrations-main-div">
          <div className="integrations-sub-div">
            <div className="integrations-small-div">
              <img src="../assets/img/Search_Value.svg" alt="integrations-img" />
              <h3>Integrations</h3>
              <p>Connect the apps your team already uses into your TaskedIn workflow or add a Power-Up to fine-tune your specific needs.</p>
              <div>
                <a href="../assets/img/Integrations_Puzzle.svg"><span>Browse Integrations</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="thoughtworks-main-section">
        <div className="thoughtworks-nav-div">
          <div className="thoughtworks-nav-div-internal-indicator">
            <button className="nav-btn-thoughtworks"></button>
            <button className="nav-btn-thoughtworks"></button>
            <button className="nav-btn-thoughtworks"></button>
          </div>
          <button className="thoughtworks-nav-div-prev"></button>
          <button className="thoughtworks-nav-div-forward"></button>
        </div>
        <div className="thoughtworks-nav-div-bottom-main-div">
          <div className="left-thoughtworks-nav-div-bottom-main">
            <p>[TaskedIn is] great for simplifying complex processes. As a manager, I can chunk [processes] down into bite-sized pieces for my team and then delegate that out, but still keep a bird's-eye view.</p>
            <div>
              <p>Joey Rosenberg</p>
              <p>Global Leadership Director at Women Who Code</p>
              <div>
                <img src="../assets/img/WomenWhoCode_logo.svg" alt="Women who code logo" />
                <a href="">Read the story</a>
              </div>
            </div>
          </div>
          <div className="right-thoughtworks-nav-div-bottom-main">
            <h3>75% of organizations report that TaskedIn delivers value to their business within 30 days.</h3>
            <a href="">TaskedIn TechValidate Survey</a>
          </div>
        </div>
      </section>

      <section className="teams-worldwide-main-section">
        <section className="teams-worldwide-centered-sub-section">
          <p>Join over 2,000,000 teams worldwide that are using TaskedIn to get more done.</p>
          <img src="../assets/img/logos.svd" alt="logos" />
        </section>
      </section>

      <section className="get-started-with-trello-main-section">
        <section className="get-started-with-trello-centered-sub-section">
          <h2>Get started with TaskedIn today</h2>
          <form action="" className="form-signup">
            <input type="text" placeHolder="Email" />
            <button>Sign up - it’s free!</button>
          </form>
        </section>
      </section> */}

    </main>
    {/* <AppFooter /> */}
  </section>
}
