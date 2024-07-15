import React from 'react'
import ClubPage from '../../components/ClubPage'
import { clubs } from '../../data/clubData';

export default function Btl() {
  const cultiClubs = clubs.cultural;
  const data = cultiClubs.find((club) => {
      return (club.title === "btl");
  });

  return (
    <ClubPage data={data}/>
  )
}
