import React from 'react';

const Cards = (props) => {
    const { country } =props;

    return (
      <li>
          <img src={country.flag} alt="flag" />
          <div className="data-container">
              <ul>
                  <li>{country.name}</li>
                  <li>{country.capital}</li>
                  <li>{country.population}</li>
              </ul>

          </div>
      </li>
    );
};

export default Cards;