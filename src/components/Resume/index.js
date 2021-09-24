import React from 'react';

function Resume() {

  return (
    <div className="section">
      <h2 className="label">
        {/* will add resume when ready */}
        Resume. click on link to <a href="/#Resume">download</a> 
      </h2>
      <ul>Front-end Technologies
        <li className="resumeList">HTML</li>
        <li className="resumeList">CSS</li>
        <li className="resumeList">JavaScript</li>
        <li className="resumeList">JQuery</li>
        <li className="resumeList">Responsive design</li>
        <li className="resumeList">React</li>
        <li className="resumeList">Bootstrap</li>
        <li className="resumeList">Bulma</li>
      </ul>
        <br></br>
      <ul>Back-end Technologies
        <li className="resumeList">APIs</li>
        <li className="resumeList">Node</li>
        <li className="resumeList">Express</li>
        <li className="resumeList">MySQL, Sequelize</li>
        <li className="resumeList">MongoDB Monooges</li>
        <li className="resumeList">REST</li>
        <li className="resumeList">GraphQL</li>
        <li className="resumeList">APIs</li>
      </ul>
    </div>
  );
}

export default Resume;