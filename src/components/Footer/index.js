import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faStackOverflow, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'


function Footer() {
	return (
		<footer>
			<p className="has-text-centered">
				<a target="_blank" rel="noreferrer" href="https://github.com/szali3"><FontAwesomeIcon className="m-2" icon={faGithub} size = '2x'/></a>
				<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/syed-zohaib-ali-4ba107209/"><FontAwesomeIcon className="m-2" icon={faLinkedinIn} size = '2x'/></a>
				<a target="_blank" rel="noreferrer" href="https://stackoverflow.com/users/15365166/zohaib-ali"><FontAwesomeIcon className="m-2" icon={faStackOverflow} size = '2x'/></a>
			</p>
			<div className="content has-text-centered ">
				<p>
					Created using <a href="https://reactjs.org/">React</a>. by Zohaib Ali. © 2021
				</p>
			</div>
		</footer>
	);
}

export default Footer;