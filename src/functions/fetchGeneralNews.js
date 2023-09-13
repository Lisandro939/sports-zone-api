import axios from 'axios';
import * as cheerio from 'cheerio'
import { connection } from '../index.js'

const url = 'https://onefootball.com/es/inicio'

async function getHTML () {
    const { data: html} = await axios.get(url)
    return html;
};

export function fetchNotices () {
    getHTML().then(async (res) => {
        const titles = [];
        const descriptions = [];
        const images = [];
        const sourcesImages = [];
        const sources = [];
        const times = [];
        const $ = cheerio.load(res);
        const $titles = $('ul > li > article').each((i, line) => {
            const $title = $(line).find('a > p').eq(0)
            const title = $title.text().replace(/^[^A-Z\u00C0-\u00D6\u00D8-\u00DE]+|,|\n|\+|\t/g, '');
            titles.push(title)
        })
        const $descriptions = $('ul > li > article').each((i, line) => {
            const $description = $(line).find('a > p').eq(1)
            const description = $description.text().replace(/,|\n|\+|\t/g, '');
            descriptions.push(description)
        })
        let index = 0;
        const $images = $('ul > li > article > a > div > picture > source').each((i, line) => {
            const image = $(line).attr('srcset').match(/https[^ ]+/)[0]
            const regex = /w=\d+&h=\d+&/;
            if (index === 0 && image.match(/w=(\d+)/)[1] > 300) {
                images.push(image)
                index++;
            } else if(image.replace(regex, '') !== images[index-1].replace(regex, '') && image.match(/w=(\d+)/)[1] > 300) {
                images.push(image)
                index++;
            }
        })
        const $sourcesImages = $('ul > li > article > footer > a > div > img').each((i, line) => {
            const sourceImage = $(line).attr('src').match(/^[^ ]+/)[0]
            sourcesImages.push(sourceImage)
        })
        const $sources = $('ul > li > article > footer > a > span').each((i, line) => {
            const source = $(line).text()
            sources.push(source)
        })
        const $times = $('ul > li > article > footer > a > time').each((i, line) => {
            const time = $(line).text()
            times.push(time)
        })
        const superArray = [];
        for (let i = 0; i < 7; i++) {
            let noticeType;
            if (i === 0) {
                noticeType = 'top'
            } else if (i > 0 && i <= 4) {
                noticeType = 'second'
            } else {
                noticeType = 'third'
            }
            const superObject = {
            title: titles[i],
            description: descriptions[i],
            image: images[i],
            source: sources[i],
            sourceImage: sourcesImages[i],
            time: times[i],
            type: noticeType
            };
            superArray.push(superObject);
        }
        // Now superArray contains the objects with combined data
        // Save this data to the database
        let databaseNotices = [];
        connection.query('SELECT * FROM notice', (err, results) => {
            if (err) {
                console.log(err);
            } else {
                databaseNotices = results;
                // Wait for superArray to be populated before inserting into the database
                insertOrUpdateDataInDatabase(superArray);
            }
        });

        // superArray tarda unos segundos, por lo que hay que esperar a que se llene
        // antes de insertar en la base de datos
        async function insertOrUpdateDataInDatabase(superArray) {
            for (const item of superArray) {
                const existingNotice = databaseNotices.find((notice) => notice.title === item.title);
        
                if (existingNotice) {
                    // If a notice with the same title exists, update it
                    connection.query('UPDATE notice SET description=?, image=?, source=?, sourceImage=?, time=?, type=? WHERE title=?',
                        [item.description, item.image, item.source, item.sourceImage, item.time, item.type, item.title],
                        (err, results) => {
                            if (err) {
                                console.log(err);
                            } else {
                                console.log('Updated existing data in the database');
                            }
                        }
                    );
                } else {
                    // If the notice with the title doesn't exist, insert it
                    connection.query('INSERT INTO notice (title, description, image, source, sourceImage, time, type) VALUES (?, ?, ?, ?, ?, ?, ?)',
                        [item.title, item.description, item.image, item.source, item.sourceImage, item.time, item.type],
                        (err, results) => {
                            if (err) {
                                console.log(err);
                            } else {
                                console.log('Inserted new data in the database');
                            }
                        }
                    );
                }
            }
        }
    })
    return;
}