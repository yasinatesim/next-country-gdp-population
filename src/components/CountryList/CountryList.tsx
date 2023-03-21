import React from 'react';

import countries from '@/data/countries.json';

import css from './CountryList.module.scss';

type Country = {
  name: string;
  population: number;
  gdp: number;
};

const CountryList = () => {
  return (
    <div className={css.list}>
      {countries.countries.map((country: Country) => (
        <div className={css.card} key={country.name}>
          <h2>{country.name}</h2>
          <p className={css.population}>Population: {country.population.toLocaleString()}</p>
          <p className={css.gdp}>GDP: {country.gdp.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default CountryList;
