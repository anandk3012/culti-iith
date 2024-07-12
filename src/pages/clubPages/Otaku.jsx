import React from 'react'
import otaku from "../../assets/clubImages/otaku.png"
import ClubPage from '../../components/ClubPage'

export default function Otaku() {

  const data = {
    "id": 1.4,
    "name": "Otaku Club",
    "path": "otaku",
    "logoClub": otaku,
    "logoPng": otaku,
    "description": "The Otaku Club is IITH's anime and manga club whose sole purpose is to promote this art form and Japanese culture to the whole campus.",
    "vision": "Our vision is to promote the Japanese culture and its art form through events and bring together a community of anime and manga enthusiasts.",
    "team": [
      {
        "name":"SATHWIK",
        "photo":otaku,
        "position":"Coordinator",
        "rollno":"ee22btech11012"
      }
    ]
  }

  return (
    <ClubPage data={data} />
  )
}
