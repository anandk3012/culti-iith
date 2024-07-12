import React from 'react'
import ClubPage from '../../components/ClubPage'
import btl from'../../assets/clubImages/btl.png'
export default function Btl() {

  const data = {
    "id": 1.2,
    "name": "BehindTheLens (BTL)",
    "path": "btl",
    "logoClub": btl,
    "logoPng": btl,
    "description": "The behind the lens club exists to Foster the appreciation and study of film making. The purpose of our club is to give students the opportunity to approach all aspects of film and film making in a serious, meaningful, and in-depth manner.",
    "vision": "Our vision is to get a good position in Inter IIT and promote the culture of filmmaking in the college and spread the word of our club to other colleges by participating in competitions conducted by them.",
    "team":[
      {
        "position":" Mentor",
        "name":"M Kruthisver",
        "photo":btl,
        "rollno":"ep22btech11014"
      },
      {
        "position":"Coordinator",
        "name":"Snehil Singh",
        "photo":btl,
        "rollno":"e222btech11050"
      },
      {
        "position":"Coordinator",
        "name":"Parlapalli Teja",
        "photo":btl,
        "rollno":"ic22btech11010"
      },
      {
        "position":"Coordinator",
        "name":"Aravind Siddhartha",
        "photo":btl,
        "rollno":"ce21btech11021"
      }
    ]
  }

  return (
    <ClubPage data={data}/>
  )
}
