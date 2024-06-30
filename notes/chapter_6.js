const sleep = ms => new Promise(r => setTimeout(r, ms));

async function run(){
    console.log('Start Code');
    await sleep(20);
    console.log('Half Way');
    await sleep(20);
    console.log('Finished Code');
    
}

run();


async function fetchData(){

    try {
        const response = await fetch('https://dummyjson.com/products/1');
        const data = await response.json();
        console.log(data);
        // console.log(response)
    } catch(err) {
        console.log(err.message);
    }

};


fetchData();