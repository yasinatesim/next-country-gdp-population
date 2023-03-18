import React from 'react';

import countries from '@/data/countries.json';

import css from './CountryTable.module.scss';

const CountryTable = () => {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th>Country name</th>
          <th>Population</th>
          <th>GDP</th>
        </tr>
      </thead>
      <tbody>
        {countries.countries.map((country) => (
          <tr key={country.name}>
            <td>{country.name}</td>
            <td>{country.population.toLocaleString()}</td>
            <td>{country.gdp.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CountryTable;
