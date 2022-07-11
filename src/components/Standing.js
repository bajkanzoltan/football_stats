import React, { useState } from 'react';
import StandingItem from './StandingItem';
import Accordion from './Accordion';

const Standing = ({ datas, tabella, onTeam1Change, onTeam2Change, team1, team2}) => {
    const [counter, setCounter] = useState(0)
    const renderedList = tabella.map((elem, i) => {
        return <StandingItem elem={elem} key={i} counter={counter} onTeam1Change={onTeam1Change} 
        onTeam2Change={onTeam2Change} team1={team1} team2={team2}/>
    })

    return (
        <article className="standings">
            <div className="leagueInfo">
                <img src={datas.flag} alt='flag' className="logo" />
                <img src={datas.logo} alt='logo' className="logo" />
            </div>
            <ul className="shorts">
            <li>R</li>
            <li></li>
            <li className="clubname">TEAM</li>
            <li>P</li>
            <li className="mobile">W</li>
            <li className="mobile">D</li>
            <li className="mobile">L</li>
            <li className="goals">GD</li>
            </ul>
            <div  className="renderedList"
                onClick={() => setCounter(counter + 1)}>
                {renderedList}
            </div>
            <div>
                <div className="flex"><div className='littleBoxChamps'>|||</div><p>Qualified for Champions League</p></div>
                <div className="flex"><div className='littleBoxEuro'>|||</div><p>Qualified for Europa League</p></div>
                <div className="flex"><div className='littleBoxRelegation'>|||</div><p>Relegated </p></div>
            </div>
            <Accordion />
        </article>
    )
}

export default Standing;