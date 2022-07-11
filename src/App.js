import React, { useState, useEffect } from 'react';
import axios from "axios";
import Header from './components/Header';
import "./App.css";
import LeagueOptions from './components/LeagueOptions';
import YearOptions from './components/YearOptions';
import Standing from './components/Standing';
import H2H from './components/H2H';
import Footer from './components/Footer';

export default function App() {


    const [datas, setDatas] = useState({});
    const [tabella, setTabella] = useState([]);
    const [liga, setLiga] = useState(140);
    const [year, setYear] = useState(2021);
    const [team1, setTeam1] = useState(541);
    const [team2, setTeam2] = useState(529);
    const [head2Head, setHead2Head] = useState([]);
    const [team1Logo, setTeam1Logo] = useState("https://media.api-sports.io/football/teams/541.png");
    const [team2Logo, setTeam2Logo] = useState("https://media.api-sports.io/football/teams/529.png");

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/standings',
            params: { season: year, league: liga },
            headers: {
                'X-RapidAPI-Key': '01a70f23d4mshc1af68d2dae2b8cp1705f4jsnbd32561fdbf8',
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
        };

        axios.request(options)
            .then(function (res) {
                setDatas(res.data.response[0].league)
                setTabella(res.data.response[0].league.standings[0])
                setTeam1(res.data.response[0].league.standings[0][0].team.id)
                setTeam2(res.data.response[0].league.standings[0][1].team.id)
                setTeam1Logo(res.data.response[0].league.standings[0][0].team.logo)
                setTeam2Logo(res.data.response[0].league.standings[0][1].team.logo)

            }).catch(function (error) {
                console.error(error);
            });
    }, [liga, year])

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures/headtohead',
            params: { h2h: `${team1}-${team2}` },
            headers: {
                'X-RapidAPI-Key': '01a70f23d4mshc1af68d2dae2b8cp1705f4jsnbd32561fdbf8',
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
        };

        axios.request(options)
            .then(function (res) {
                const temp = res.data.response;
                temp.sort((a, b) => b.fixture.timestamp - a.fixture.timestamp);
                const finishedMatches = temp.filter(i => i.fixture.status.short !==  "TBD" ).filter(j => j.fixture.status.short !==  "NS");
                setHead2Head(finishedMatches);

            }).catch(function (error) {
                console.error(error);
            });
    }, [team1, team2])

    const handleLigaChange = (event) => {
        setLiga(event.target.value);
    };

    const handleYearChange = (event) => {
        setYear(event.target.value);
    };

    const onTeam1Change = (data, logo) => {
        setTeam1(data);
        setTeam1Logo(logo)
    }

    const onTeam2Change = (data, logo) => {
        setTeam2(data);
        setTeam2Logo(logo)
    }

    return (
        <main>
            <Header />
            <section className="selection">
                <LeagueOptions
                    liga={liga}
                    onChange={handleLigaChange}
                />
                <YearOptions
                    year={year}
                    onChange={handleYearChange}
                />
            </section>
            <section className="content">
                <Standing
                    datas={datas}
                    tabella={tabella}
                    onTeam1Change={onTeam1Change}
                    onTeam2Change={onTeam2Change}
                    team1={team1}
                    team2={team2}
                />

                <H2H head2Head={head2Head}
                    team1={team1}
                    team2={team2}
                    team1Logo={team1Logo}
                    team2Logo={team2Logo}
                />
            </section>
            <Footer />
        </main>
    )

}