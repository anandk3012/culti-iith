import React from 'react'
import ClubPage from '../../components/ClubPage'
import ebsb from "../../assets/clubImages/ebsb.jpg"

export default function Ebsb() {

  const data =
  {
    "id": 1.5,
    "name": "Ek Bharat Shrestha Bharat (EBSB)",
    "path": "ebsb",
    "logoClub": ebsb,
    "logoPng": ebsb,
    "description": "Ek Bharat Shreshtha Bharat (EBSB) is a cultural club that brings together the rich tapestry of India's diverse cultures and traditions. At IIT Hyderabad, we take immense pride in celebrating our unity in diversity through various events and festivals that showcase the beauty and depth of Indian culture.",
    "vision": "Our vision tenure is to organize events at a scale almost equal to or much greater than our past tenure. We would want to come up with further innovative events that cover the rich culture and heritage of uncovered parts of India.",
    "team":[
      {
        "name": "Santoshi Gayatri",
        "position":"Overall Head",
        "photo":ebsb,
        "rollno":"cs21btech11002"
      },
      {
        "name": "Anand",
        "position":"Web Head",
        "photo":ebsb,
        "rollno":"ep22btech11012"
      },
    ]
  }

  return (
    <ClubPage data={data} />
  )
}
