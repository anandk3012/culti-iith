import React from 'react'
import ClubPage from '../../components/ClubPage'
import { clubs } from '../../data/clubData';

export default function Shuffle() {

  const cultiClubs = clubs.cultural;
  const data = cultiClubs.find((club) => {
      return (club.title === "shuffle");
  });

  return (
    <ClubPage data={data} />
  )
}
