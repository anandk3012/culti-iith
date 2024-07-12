import React from 'react'
import shuffle from "../../assets/clubImages/shuffle.png"
import ClubPage from '../../components/ClubPage'

export default function Shuffle() {

  const data = {
    "id": 1.1,
    "name": "Shuffle crew ",
    "path": "shuffle",
    "logoClub": shuffle,
    "logoPng": shuffle,
    "description": "IIT Hyderabad’s dance club is a lively and vigorous student organization focusing on promoting dance culture in the campus. It offers opportunity for the students to express themselves in different dance categories such as classical or modern and street dances such as hip-hop and break-dancing. A club arranges for weekend classes and dance-offs as well as competitions to create the spirit of teamwork and innovative ideas amongst the dancers.  ",
    "vision": "  1. Building Community: To build a fun-loving and inclusive community of dancers with a group of peers that enables one to collaborate and be creative. <br /> 2. Inter IIT Participation: All inter IIT cultural festivals and competitions shall be participated in with zest, so that IIT Hyderabad students' talent gets highlighted on a bigger platform.<br />3. Sessions: Sessions by our team for the students to learn and grow. <br />4. Performance Opportunities: Enough opportunities will be provided to the students to perform within the campus as well as outside for gaining confidence and stage presence. <br /> 5. Innovation in Dance: Making provision for innovation in dance, thereby supporting choreography that is original and experimental in fusions of different dances.<br /> 6. Talent Development: Identifying and developing dance talent in the student body; providing a means to encourage beginners as well as experienced dancers to work towards the goal of excellence. <br /> 7. Promoting Culture: Promotion of various forms of dance to ensure that students get exposure to different cultural and contemporary forms of dance.",
    "team": [
      {
        "name": "Harini",
        "position": "Choreo Coordinator",
        "photo": shuffle,
        "rollno": "ms22btech11001"
      },
      {
        "name": "Ananya",
        "position": "Coordinator",
        "photo": shuffle,
        "rollno": "ma22btech11009"
      },
      {
        "name": "Siddharth",
        "position": "coordinator",
        "photo": shuffle,
        "rollno": "cs21btech11022"
      },
    ]
  }

  return (
    <ClubPage data={data} />
  )
}
