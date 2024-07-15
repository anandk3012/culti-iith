import React from 'react'
import ClubPage from '../../components/ClubPage'
import { clubs } from '../../data/clubData'

export default function Gesture() {
  const cultiClubs = clubs.cultural;
  const data = cultiClubs.find((club) => {
    return (club.title === "gesture");
  });

  return (
    <div>
      <ClubPage data={data} />
    </div>
  )
}
