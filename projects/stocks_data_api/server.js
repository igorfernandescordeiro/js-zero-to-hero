// step 1 - define the web scraper
const cheerio = require('cheerio');

let stockTicker = 'pypl';

let type = 'history';


async function scrapeData() {
    try {
        const url = `https://finance.yahoo.com/quote/${stockTicker}/${type}?p=${stockTicker}`
        console.log(`URL: ${url}`)

        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
                'Origin': 'https://your-site.com',
                'x-requested-with': 'XMLHttpRequest', 
            },
        });



        const html = await response.text();
     

        const $ = cheerio.load(html);

        const price_history = getPrices($);

        console.log(price_history);

    } catch (error) {
        console.log(`ERROR: ${error.message}`)
    }
}

function getPrices(cher) {
    const prices = cher('td:nth-child(6)').get().map((current_value) => {
        return cher(current_value).text()
    })
    return prices
}



// step 2 - initialize server that server up an html file that th user can play with

const express = require('express');
const app = express();
const port = 8383;

//middleware
app.use(express.json());
app.use(require('cors')());
app.use(express.static('public'));





app.listen(port, () => { console.log(`server has started on port: ${port}`)});



// step 3 - define api endpoints to access stock data and call webscraper

app.post();