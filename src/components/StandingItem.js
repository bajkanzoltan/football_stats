import React from 'react';

export default function StandingItem({ elem, onTeam1Change, onTeam2Change, counter, team1, team2}) {
    let descColor = "";
    descColor = elem.description === null ? descColor = "none" :
        elem.description.includes("Relegation") ? descColor = "relegation" :
            elem.description.includes("Champions") ? descColor = "champ" :
                elem.description.includes("Europa") ? descColor = "euro" :
                    descColor = "none";

    let chosenTeam = elem.team.id === team1 ? 'chosenTeam1' : 
        elem.team.id === team2 ? 'chosenTeam2' : '';
    chosenTeam = `clubname_${chosenTeam}`;
    
    return (
        <ul className="hovered">
            <li className={descColor}>{elem.rank}</li>
            <li><img src={elem.team.logo} className="club_logo"
                alt="club logo" /></li>
            <li className={chosenTeam}
                onClick={() => counter % 2 === 0 ? onTeam1Change(elem.team.id, elem.team.logo) : onTeam2Change(elem.team.id, elem.team.logo)}
                >{elem.team.name}</li>
            <li>{elem.points}</li>
            <li className="mobile">{elem.all.win}</li>
            <li className="mobile">{elem.all.draw}</li>
            <li className="mobile">{elem.all.lose}</li>
            <li className="goals">{elem.all.goals.for}:{elem.all.goals.against}</li>
        </ul>
    )
}
