// step 1 - define the web scraper
const cheerio = require('cheerio');

let stockTicker = 'SMAR';

let type = 'history';


async function scrapeData() {
    try {
        // step a - fetch the page html

        const url = `https://finance.yahoo.com/quote/${stockTicker}/${type}?p=${stockTicker}`
        //`https://finance.yahoo.com/quote/${stockTicker}/${type}?p=${stockTicker}`;
        console.log(`URL: ${url}`)

        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36'
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


// async function scrapeData(ticker) {
//     try {
//         // step a - fetch the page html
//         const url = `https://finance.yahoo.com/quote/${ticker}/${type}?p=${ticker}`
//         console.log(`URL: ${url}`)
//         const res = await fetch(url)
//         const html = await res.text()
//         console.log(`HTML: ${html}`);

//         const $ = cheerio.load(html)
//         const price_history = getPrices($)
//         console.log(price_history)
//         return price_history
//     } catch (err) {
//         console.log(err.message)
//     }
// }

// function getPrices(cher) {
//     const prices = cher('td').get().map((current_value) => {
//         return cher(current_value).text()
//     })
//     return prices
// }

scrapeData();

// step 2 - initialize server that server up an html file that th user can play with


// step 3 - define api endpoints to access stock data and call webscraper