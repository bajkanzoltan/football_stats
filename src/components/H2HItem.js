import React from 'react'

export default function H2HItem({ elem, teamWins}) {
    let homeTeamIsWinning = elem.teams.home.winner ? "homeWinner" :'noWinner';
    let awayTeamIsWinning = elem.teams.away.winner ? "awayWinner" : 'noWinner';
    let penaltyWin = (elem.teams.home.winner || elem.teams.away.winner) &&  (elem.goals.away === elem.goals.home) ? 'P ' : '';
    let colorByWinner = teamWins === undefined? 'drawColor' : teamWins;
    return (
        <div className="h2hItem">
            <div className="date">{elem.fixture.date.substring(0, 10).replaceAll('-', '.') + '.'}</div>
            <div className="result">
            <div className="result_homeTeam"><div className={homeTeamIsWinning}>{elem.teams.home.name}</div></div> 
            <div className="scores"><div className={colorByWinner}>{penaltyWin}{elem.goals.home}:{elem.goals.away}</div></div>
            <div className="result_awayTeam"><div className={awayTeamIsWinning}>{elem.teams.away.name}</div></div>
            </div>
        </div>
    )
}
