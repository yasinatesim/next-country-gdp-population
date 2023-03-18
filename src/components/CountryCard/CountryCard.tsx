import React from 'react';

import countries from '@/data/countries.json';

import css from './CountryCard.module.scss';

type Country = {
  name: string;
  population: number;
  gdp: number;
};

type Props = {
  country: Country;
};

const CountryCard = ({ country }: Props) => {
  return (
    <div className={css.card}>
      <h2>{country.name}</h2>
      <p className={css.population}>Population: {country.population.toLocaleString()}</p>
      <p className={css.gdp}>GDP: {country.gdp.toLocaleString()}</p>
    </div>
  );
};

const CountryList = () => {
  return (
    <div className={css.list}>
      {countries.countries.map((country) => (
        <CountryCard key={country.name} country={country} />
      ))}
    </div>
  );
};

export default CountryList;
