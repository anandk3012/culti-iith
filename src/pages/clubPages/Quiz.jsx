import React from 'react'
import { clubs } from '../../data/clubData'
import ClubPage from '../../components/ClubPage';

export default function Quiz() {
  const litClubs = clubs.literary;
  const data = litClubs.find((club) => {
    return (club.title === "quiz");
  });
  return (
    <div>
      <ClubPage data={data} />
    </div>
  )
}
