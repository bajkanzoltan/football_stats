import React, { useState } from 'react';
import H2HItem from './H2HItem';

const H2H = ({ head2Head, team1, team2, team1Logo, team2Logo }) => {
    const [showMore, setShowMore] = useState(false);

    let team1WinCount = 0;
    let teamWins = [];
    for (let index = 0; index < head2Head.length; index++) {
        if (((team1 === head2Head[index].teams.away.id) && head2Head[index].teams.away.winner)
            || ((team1 === head2Head[index].teams.home.id) && head2Head[index].teams.home.winner)) {
            team1WinCount += 1;
            teamWins[index] = "team1Color";

        }
    }

    let team2WinCount = 0;
    for (let index = 0; index < head2Head.length; index++) {
        if (((team2 === head2Head[index].teams.away.id) && head2Head[index].teams.away.winner)
            || ((team2 === head2Head[index].teams.home.id) && head2Head[index].teams.home.winner)) {
            team2WinCount += 1;
            teamWins[index] = "team2Color";
        }
    }

    let drawCount = head2Head.length - team1WinCount - team2WinCount;

    let btnVisibility=head2Head.length < 8 ? " btnHidden" : "btnVisible";



    const shortRenderedList = head2Head.slice(0, 8).map((elem, i) => {
        return <H2HItem elem={elem} key={i} teamWins={teamWins[i]}/>
    })

    const fullRenderedList = head2Head.map((elem, i) => {
        return <H2HItem elem={elem} key={i} teamWins={teamWins[i]} />
    })

    return (
        <article className="h2h-ui">
            <div className="winCounter">
                <div className="winCountItems">
                    <img src={team1Logo} alt='team1Logo' className="logobigger" />
                    <div className="winCountHome">{team1WinCount} </div>
                </div>
                <div className="winCountItems">
                    <div className="empty"></div>
                    <div className='drawCount'>{drawCount}</div>
                </div>
                <div className="winCountItems">
                    <img src={team2Logo} alt='team1Logo' className="logobigger" />
                    <div className='winCountAway'>{team2WinCount} </div>
                </div>
            </div>
            <div>{showMore ? fullRenderedList : shortRenderedList}</div>
            <button className={btnVisibility} type="button" onClick={() => setShowMore(!showMore)}>
                {showMore ? 'Show less matches' : `Show ${head2Head.length - 8} more matches`}
            </button>
        </article>
    )
}

export default H2H;
