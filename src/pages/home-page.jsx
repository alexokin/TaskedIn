import { AppHeader } from "../cmps/app-header";

export function HomePage() {

  return <section className="home-page">
    <AppHeader />
    <main>

      <section className="home-page-signup-main-section">
        <section className="home-page-signup-sub-section">
          <div className="left-signup-sub-section">
            <h1 className="left-signup-sub-section-h1">Trello brings all your tasks, teammates, and tools together</h1>
            <p className="left-signup-sub-section-p">Keep everything in the same place—even if your team isn't.</p>
            <div className="left-signup-sub-section-email-sign-div">
              <input type="text" placeHolder="Email" />
              <button>Sign up - it's free!</button>
            </div>
            <div className="left-signup-sub-section-video">
              <span>Watch video</span>
              <img src="" alt="watch video play sign" />
            </div>
          </div>
          <div className="right-signup-sub-section">
            <img src="../assets/img/trello-ui-collage.webp" alt="ui home page picture" />
          </div>
        </section>
      </section>

      <section className="home-page-productivity-powerhouse-section">
        <div className="left-home-page-productivity-powerhouse-div">
          <div className="upper-left-home-page-productivity-powerhouse-div">
            <p className="upper-left-home-page-productivity-powerhouse-div-p">TRELLO 101</p>
            <h2 className="upper-left-home-page-productivity-powerhouse-div-h2">A Productivity powerhouse</h2>
          </div>
          <p className="bottom-left-home-page-productivity-powerhouse-div-p">Simple, flexible, and powerful. All it takes are boards, lists, and cards to get a clear view of who’s doing what and what needs to get done. Learn more in our <a href="">guide for getting started</a></p>
        </div>
      </section>

      <section className="home-page-boards-lists-cards-ui-main-section">
        <section className="home-page-boards-lists-cards-ui-sub-section">
          <section className="left-home-page-boards-lists-cards-ui-sub-section">
            <section className="left-home-page-boards-lists-cards-ui-sub-section">
              <button className="left-home-page-boards-lists-cards-ui-button">
                <div className="left-home-page-boards-lists-cards-ui-button-div">
                  <h3 className="left-home-page-boards-lists-cards-ui-button-div-h3">Boards</h3>
                  <p className="left-home-page-boards-lists-cards-ui-button-div-p">Trello boards keep tasks organized and work moving forward. In a glance, see everything from “things to do” to “aww yeah, we did it!”</p>
                </div>
              </button>
              <button className="left-home-page-boards-lists-cards-ui-button">
                <div className="left-home-page-boards-lists-cards-ui-button-div">
                  <h3 className="left-home-page-boards-lists-cards-ui-button-div-h3">Lists</h3>
                  <p className="left-home-page-boards-lists-cards-ui-button-div-p">The different stages of a task. Start as simple as To Do, Doing or Done—or build a workflow custom fit to your team’s needs. There’s no wrong way to Trello.</p>
                </div>
              </button>
              <button className="left-home-page-boards-lists-cards-ui-button">
                <div className="left-home-page-boards-lists-cards-ui-button-div">
                  <h3 className="left-home-page-boards-lists-cards-ui-button-div-h3">Cards</h3>
                  <p className="left-home-page-boards-lists-cards-ui-button-div-p">Cards represent tasks and ideas and hold all the information to get the job done. As you make progress, move cards across lists to show their status.</p>
                </div>
              </button>
            </section>
          </section>
          <section className="right-home-page-boards-lists-cards-ui-sub-section">
            <img src="../assets/img/trello-ui-boards-lists-cards.webp" alt="trello-ui-boards-lists-cards img" />
          </section>
        </section>
      </section>

      <section className="home-page-empty-space-section"></section>

      <section className="home-page-templates-designed-main-section">
        <div className="templates-designed-div">
          <p className="templates-designed-div-p">A BLUEPRINT FOR SUCCESS</p>
          <h2 className="templates-designed-div-p">Templates designed for any team</h2>
        </div>
        <div className="templates-designed-empty-div"></div>
      </section>

      <div className="carousel-controller">
        <svg>arrow left</svg>
        <svg>arrow right</svg>
      </div>

      <div className="carousel-main-section">
        <div className="carousel-section">

          <div className="carousel-square">
            <div className="header-carousel-square"></div>
            <div className="logo-carousel-square"></div>
            <div className="bottom-carousel-square">
              <h3 className="bottom-carousel-square-h3">Project Management Tamplate</h3>
              <span className="bottom-carousel-square-span">by Trello Marketing Team</span>
              <p className="bottom-carousel-square-p">Big dreams turn into bigger results with a project plan. Use this template to build your team's ideal workflow, for projects big or small.</p>
            </div>
          </div>

          <div className="carousel-square">
            <div className="header-carousel-square"></div>
            <div className="logo-carousel-square"></div>
            <div className="bottom-carousel-square">
              <h3 className="bottom-carousel-square-h3">Product Roadmap Template</h3>
              <span className="bottom-carousel-square-span">by Trello Product Team</span>
              <p className="bottom-carousel-square-p">Use the Trello product roadmap template to track product development and feature requests, and collaborate on development processes.</p>
            </div>
          </div>

          <div className="carousel-square">
            <div className="header-carousel-square"></div>
            <div className="logo-carousel-square"></div>
            <div className="bottom-carousel-square">
              <h3 className="bottom-carousel-square-h3">Task Management Tamplate</h3>
              <span className="bottom-carousel-square-span">by Mitchell Fry, Engineer @ Oliver Wyman</span>
              <p className="bottom-carousel-square-p">Easily keep track of what you’ve done, what you have to do, and when you have to do it with this Trello task management template. </p>
            </div>
          </div>

          <div className="carousel-square">
            <div className="header-carousel-square"></div>
            <div className="logo-carousel-square"></div>
            <div className="bottom-carousel-square">
              <h3 className="bottom-carousel-square-h3">Meeting Agenda Template</h3>
              <span className="bottom-carousel-square-span">by Darren Chait, Co-Founder @ Hugo</span>
              <p className="bottom-carousel-square-p">Great meetings require planning. Use this Trello template as the framework for more effective, collaborative team meetings.</p>
            </div>
          </div>

          <div className="carousel-square">
            <div className="header-carousel-square"></div>
            <div className="logo-carousel-square"></div>
            <div className="bottom-carousel-square">
              <h3 className="bottom-carousel-square-h3">Social Media Marketing Template</h3>
              <span className="bottom-carousel-square-span">by Moisson Marketing</span>
              <p className="bottom-carousel-square-p">From generating ideas to planning your release schedule, use this Trello social media template to manage everything in one place.</p>
            </div>
          </div>

          <div className="carousel-square">
            <div className="header-carousel-square"></div>
            <div className="logo-carousel-square"></div>
            <div className="bottom-carousel-square">
              <h3 className="bottom-carousel-square-h3">Kanban Template</h3>
              <span className="bottom-carousel-square-span">by Trello Engineering Team</span>
              <p className="bottom-carousel-square-p">Use this simple Kanban template to improve the productivity of your engineering team and help them build better products, faster.</p>
            </div>
          </div>

        </div>
      </div>

      <div className="explore-all-templates-main-section">
        <div className="left-explore-all-templates-main-section">
          <p className="left-explore-all-templates-main-section-p">No need to start from scratch. Jump start your board with tried-and-true templates, then customize it to make it your own.</p>
        </div>
        <div className="right-explore-all-templates-main-section">
          <a href=""><span>Explore all templates</span></a>
        </div>
      </div>

      <section className="see-work-in-full-width-main-section">
        <div className="see-work-in-centered-sub-section">
          <div className="header-centered-sub-section">
            <div className="sub-header-centered-sub-section">
              <div className="h2-p-btn-sub-first-centered-sub-div">
                <h2>See work in a whole new way</h2>
                <p>View your teams projects from every angle and bring a fresh perspective to the task at hand.</p>
                <a href=""><span>Discover all Trello views</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="first-centered-main-section">
        <section className="first-centered-sub-section">
          <img src="../assets/img/trello hit deadlines.webp" alt="left-img-first-centered-sub-section" />
          <section className="right-first-centered-sub-section">
            <div className="right-first-centered-sub-section-div">
              <img src="" alt="svg lines" />
              <h3>HIT DEADLINES EVERY TIME</h3>
            </div>
            <p>From weekly sprints to annual planning, Timeline view keeps all tasks on track. Quickly get a glimpse of what’s coming down the pipeline and identify any gaps that might impede your team’s progress.</p>
            <a href="">Learn more about Timeline view</a>
          </section>
        </section>
      </section>

      <section className="second-centered-main-section">
        <section className="second-centered-sub-section">
          <img src="../assets/img/trello-stay-on-top-of-tasks.webp" alt="right-img-second-centered-sub-section" />
          <section className="left-second-centered-sub-section">
            <div className="left-second-centered-sub-section-div">
              <img src="" alt="svg lines" />
              <h3>Stay on top of tasks</h3>
            </div>
            <p>Start each day without any surprises. Whether scheduling an editorial calendar or staying on top of to-dos, Calendar view is like a crystal ball giving you a clear vision of what work lies ahead.</p>
            <a href="">Learn more about Calendar view</a>
          </section>
        </section>
      </section>

      <section className="home-page-empty-space-section"></section>
      <section className="home-page-empty-space-section"></section>

      <section className="do-more-with-trello-section">
        <div className="left-do-more-with-trello-section">
          <p className="first-p-left-do-more-with-trello-section">Powerful ways to grow</p>
          <h2 className="h2-left-do-more-with-trello-section">Do more with Trello</h2>
          <p className="second-p-left-do-more-with-trello-section">Trello’s intuitive features give any team the ability to quickly set up and customize workflows for just about anything.</p>
        </div>
      </section>

      <section className="integrations-butler-enterprise-main-section">
        <div className="trello-enterprise-main-div">
          <div className="trello-enterprise-sub-div">
            <div className="trello-enterprise-small-div">
              <img src="../assets/img/Search_Value.svg" alt="trello-enterprise-img" />
              <h3>Trello Enterprise</h3>
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
              <p>No-code automation is built into every Trello board. Focus on the work that matters most and let the robots do the rest.</p>
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
              <p>Connect the apps your team already uses into your Trello workflow or add a Power-Up to fine-tune your specific needs.</p>
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
            <p>[Trello is] great for simplifying complex processes. As a manager, I can chunk [processes] down into bite-sized pieces for my team and then delegate that out, but still keep a bird's-eye view.</p>
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
            <h3>75% of organizations report that Trello delivers value to their business within 30 days.</h3>
            <a href="">Trello TechValidate Survey</a>
          </div>
        </div>
      </section>

      <section className="teams-worldwide-main-section">
      <section className="teams-worldwide-centered-sub-section">
        <p>Join over 2,000,000 teams worldwide that are using Trello to get more done.</p>
        <img src="../assets/img/logos.svd" alt="logos" />
      </section>
      </section>

      <section className="get-started-with-trello-main-section">
      <section className="get-started-with-trello-centered-sub-section">
        <h2>Get started with Trello today</h2>
        <form action="" className="form-signup">
          <input type="text" placeHolder="Email"/>
          <button>Sign up - it’s free!</button>
        </form>
      </section>
      </section>

    </main>
    <AppFooter />
  </section>
}
