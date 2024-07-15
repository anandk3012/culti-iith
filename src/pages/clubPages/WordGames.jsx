import React from 'react'
import { clubs } from '../../data/clubData';
import ClubPage from '../../components/ClubPage';

export default function WordGames() {

  const litClubs = clubs.literary;
  const data = litClubs.find((club) => {
    return (club.title === "wordgames");
  });

  return (
    <div>
      <ClubPage data={data} />
    </div>
  )
}
