import React from 'react'
import { clubs } from '../../data/clubData';
import ClubPage from '../../components/ClubPage';

export default function Bmc() {

  const litClubs = clubs.literary;
  const data = litClubs.find((club) => {
    return (club.title === "bmc");
  });

  return (
    <div>
      <ClubPage data={data} />
    </div>
  )
}
