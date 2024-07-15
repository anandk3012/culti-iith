import React from 'react'
import ClubPage from '../../components/ClubPage'
import { clubs } from '../../data/clubData';

export default function Otaku() {
  
  const cultiClubs = clubs.cultural;
  const data = cultiClubs.find((club) => {
      return (club.title === "otaku");
  });

  return (
    <ClubPage data={data} />
  )
}
