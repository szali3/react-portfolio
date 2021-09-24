import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub , faChrome } from '@fortawesome/free-brands-svg-icons'

import projet1 from '../../images/survey-donkey.PNG'
import projet2 from '../../images/homePage.png'
import projet3 from '../../images/techblog.PNG'
import projet4 from '../../images/weather-dashboard.png'
import project5 from '../../images/chatterbox.png'

function Project() {
  return (
    <section className="section">
      <div className="label">
        Project Portfolio
      </div>
      <br></br>
      <div className="columns">
        <div className="column">
          <div className="card">
            <div className="card-image">
              <figure class="image is-2by1">
                <a target="_blank" rel="noreferrer" href="https://safe-earth-34464.herokuapp.com/"><img src={projet1} alt="Placeholder imagez" /></a>
              </figure>
            </div>
            <div className="txt-align">
              <span className="tag is-link projectName">Survey Donkey</span>
              <span className="tag is-link is-light">JS</span>
              <span className="tag is-link is-light">Node</span>
              <span className="tag is-link is-light">Express.js</span>
              <span className="tag is-link is-light">MySQL</span>
              <span className="tag is-link is-light">Sequelize</span>
              <a target="_blank" rel="noreferrer" href="https://github.com/szali3"><FontAwesomeIcon className="ml-3 mr-3" icon={faGithub} size = '2x'/></a>
              <a target="_blank" rel="noreferrer" href="https://safe-earth-34464.herokuapp.com/"><FontAwesomeIcon className="mr-3" icon={faChrome} size = '2x'/></a>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="card-image">
              <figure className="image is-2by1">
              <a target="_blank" rel="noreferrer" href="https://safe-earth-34464.herokuapp.com/"><img src={projet2} alt="Placeholder imagez" /></a>
              </figure>
            </div>
            <div className="txt-align">
              <span className="tag is-link projectName">Mealthyme</span>
              <span className="tag is-link is-light">HTML</span>
              <span className="tag is-link is-light">Bulma</span>
              <span className="tag is-link is-light">Third Party API</span>
              <a target="_blank" rel="noreferrer" href="https://github.com/uoftgroup7/mealThyme"><FontAwesomeIcon className="ml-3 mr-3" icon={faGithub} size = '2x'/></a>
              <a target="_blank" rel="noreferrer" href="https://uoftgroup7.github.io/mealThyme/"><FontAwesomeIcon className="mr-3 mr-3" icon={faChrome} size = '2x'/></a>
            </div>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <div className="card">
            <div className="card-image">
              <figure className="image is-2by1">
              <a target="_blank" rel="noreferrer" href="https://safe-earth-34464.herokuapp.com/"><img src={projet3} alt="Placeholder imagez" /></a>
              </figure>
            </div>
            <div className="txt-align">
              <span className="tag is-link projectName">Tech Blog</span>
              <span className="tag is-link is-light">Node</span>
              <span className="tag is-link is-light">Express</span>
              <span className="tag is-link is-light">squelelize</span>
              <span className="tag is-link is-light">handlebars</span>
              <a target="_blank" rel="noreferrer" href="https://github.com/szali3/tech-blog"><FontAwesomeIcon className="ml-3  mr-3" icon={faGithub} size = '2x'/></a>
              <a target="_blank" rel="noreferrer" href="https://pacific-basin-47076.herokuapp.com/"><FontAwesomeIcon className="mr-3" icon={faChrome} size = '2x'/></a>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="card-image">
              <figure className="image is-2by1">
              <a target="_blank" rel="noreferrer" href="https://safe-earth-34464.herokuapp.com/"><img src={projet4} alt="Placeholder imagez" /></a>
              </figure>
            </div>
            <div className="txt-align">
              <span className="tag is-link projectName">Weather App</span>
              <span className="tag is-link is-light">HTML</span>
              <span className="tag is-link is-light">CSS</span>
              <span className="tag is-link is-light">JS</span>
              <span className="tag is-link is-light">MomentJs</span>
              <span className="tag is-link is-light">JQuery</span>
              <span className="tag is-link is-light">Weather API</span>
              <a target="_blank" rel="noreferrer" href="https://github.com/szali3/Weather-dashboard"><FontAwesomeIcon className="ml-3 mr-3" icon={faGithub} size = '2x'/></a>
              <a target="_blank" rel="noreferrer" href="https://szali3.github.io/Weather-dashboard/"><FontAwesomeIcon className="mr-3 mr-3" icon={faChrome} size = '2x'/></a>
            </div>
          </div>
        </div>
        
      </div>
      <div className="columns">
        <div className="column">
          <div className="card">
            <div className="card-image">
              <figure class="image is-2by1">
                <a target="_blank" rel="noreferrer" href="https://pr3gr2-project3.herokuapp.com"><img src={project5} alt="Placeholder imagez" /></a>
              </figure>
            </div>
            <div className="txt-align">
              <span className="tag is-link projectName">ChatterBox</span>
              <span className="tag is-link is-light">JS</span>
              <span className="tag is-link is-light">Node</span>
              <span className="tag is-link is-light">GraphQL.js</span>
              <span className="tag is-link is-light">MongoDB</span>
              <span className="tag is-link is-light">React</span>
              <a target="_blank" rel="noreferrer" href="https://github.com/pr3gr2/project3"><FontAwesomeIcon className="ml-3 mr-3" icon={faGithub} size = '2x'/></a>
              <a target="_blank" rel="noreferrer" href="https://pr3gr2-project3.herokuapp.com"><FontAwesomeIcon className="mr-3" icon={faChrome} size = '2x'/></a>
            </div>
          </div>
        </div>
        {/* extra column blank */}
        <div className="column"></div> 
      </div>
    </section>
  );
}
  
  export default Project;