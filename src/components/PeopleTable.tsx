/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { PersonLink } from './PersonLink/PersonLink';
import { useNavigate } from 'react-router-dom';
import { PeopleTableHeader } from './PeopleTable/PeopleTableHeader';

export const PeopleTable = ({
  people,
  activeSlug,
  sortBy,
  order,
  setSearchParams,
}) => {
  const navigate = useNavigate();

  return (
    <table
      data-cy="peopleTable"
      className="table is-striped is-hoverable is-narrow is-fullwidth"
    >
      <PeopleTableHeader
        sortBy={sortBy}
        order={order}
        setSearchParams={setSearchParams}
      />

      <tbody>
        {people.map(person => (
          <tr
            key={person.slug}
            data-cy="person"
            onClick={() => {
              navigate(`/people/${person.slug}`);
            }}
            className={
              activeSlug === person.slug ? 'has-background-warning' : ''
            }
          >
            <td>
              <PersonLink name={person.name} people={people} />
            </td>
            <td>{person.sex}</td>
            <td>{person.born}</td>
            <td>{person.died}</td>
            <td>
              <PersonLink name={person.motherName} people={people} />
            </td>
            <td>
              <PersonLink name={person.fatherName} people={people} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
