// step 1 - define the web scraper

const cheerio = require('cheerio');

let stockTicker = 'mrna';

let type = 'history';

async function scrapeData() {
    try {
        // step a - fetch the page html

        const url = `https://finance.yahoo.com/quote/${stockTicker}/${type}?p=${stockTicker}`;

        const response = await fetch(url);

        const html = await response.text();

        const $ = cheerio.load(html);

    } catch (error) {
        console.log(error.message)
    }
}

// step 2 - initialize server that server up an html file that th user can play with


// step 3 - define api endpoints to access stock data and call webscraper