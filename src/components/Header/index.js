import React from 'react';

import img from '../../images/zohaib.jpeg'

function Header(props) {
	return (
		<header className="hero is-link is-small">
			<div className="hero-body">
				<div className="columns is-vcentered">
					<figure className="image is-128x128">
						<img className="is-rounded" src={img} alt="Zohaib Ali" />
					</figure>
					{/* <img className="is-rounde image is-128x128"src={img} alt="Zohaib Ali"></img> */}
					<p className="ml-3 title">
						Zohaib Ali
					</p>
				</div>
				{props.children}	
			</div>
		</header>
  );
}
  
  export default Header;