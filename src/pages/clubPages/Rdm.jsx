import React from 'react'
import { clubs } from '../../data/clubData'
import ClubPage from '../../components/ClubPage';

export default function Rdm() {
    const cultiClubs = clubs.cultural;
    const data = cultiClubs.find((club) => {
        return (club.title === "rdm");
    });

    return (
        <div>
            <ClubPage data={data} />
        </div>
    )
}
