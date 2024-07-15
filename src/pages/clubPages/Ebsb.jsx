import React from 'react'
import ClubPage from '../../components/ClubPage'
import ebsb from "../../assets/clubImages/ebsb.jpg"
import { clubs } from '../../data/clubData'

export default function Ebsb() {
  const cultiClubs = clubs.cultural;
  const data = cultiClubs.find((club) => {
    return (club.title === "ebsb");
  })

  return (
    <ClubPage data={data} />
  )
}
