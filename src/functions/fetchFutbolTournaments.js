import axios from 'axios';
import * as cheerio from 'cheerio'

// https://www.espn.com.ar/futbol/torneos
const url = 'https://www.espn.com.ar/futbol/torneos'

async function getHTML () {
    const { data: html} = await axios.get(url)
    return html;
};

export function fetchFutbolTournaments () {
    getHTML().then(async (res) => {
        const leagueNameClubs = [];
        const $ = cheerio.load(res);
        const $tableNames = $('div>div>div>section>div>a>h2').each((i, line) => {
        const linea = $(line).text()
        leagueNameClubs.push(linea)
        })
        console.log(leagueNameClubs.slice(0, 15))
    })
}