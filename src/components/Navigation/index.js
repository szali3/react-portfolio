import React, { useEffect } from 'react';

import { capitalizeFirstLetter } from '../../utils/helpers';

function Navigation(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <nav className="hero is-small navbar ">
      <ul className="navbar-brand">
        {categories.map((category) => (
          <li className={`mx-2 ${
              currentCategory.name === category.name && `activeNav`
              }`}
            key={category.name}>
            <a onClick={
                () => {
                  setCurrentCategory(category)
                }
              } 
              className="navbar-item" href={'#' + category.name}> {category.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;