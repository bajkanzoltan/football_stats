import React from 'react'

export default function LeagueOptions({liga, onChange}) {
  return (
    <select  value={liga} onChange={onChange} className="select">
        <option value={39} >Premier League</option>
        <option value={140}>La Liga</option>
        <option value={135}>Serie A</option>
        <option value={78}>Budesliga</option>
        <option value={61}>Ligue 1</option>
    </select>
  )
}
