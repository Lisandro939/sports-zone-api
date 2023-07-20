import axios from 'axios';
import * as cheerio from 'cheerio'

const url = 'https://www.espn.com.ar/futbol/posiciones/_/liga/bra.1'

async function getHTML () {
    const { data: html} = await axios.get(url)
    return html;
};

export function fetching () {
    getHTML().then(async (res) => {
        const leagueNameClubs = [];
        const $ = cheerio.load(res);
        const $tableNames = $('tbody>tr>td>div>span.hide-mobile>a').each((i, line) => {
        const linea = $(line).text()
        leagueNameClubs.push(linea)
        })
        console.log(leagueNameClubs)
    })
}