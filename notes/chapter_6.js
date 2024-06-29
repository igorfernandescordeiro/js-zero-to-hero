const sleep = ms => new Promise(r => setTimeout(r, ms));

async function run(){
    console.log('Start Code');
    
    await sleep(2000);
    console.log('Half Way');
    await sleep(2000);
    console.log('Finished Code');
    
}

run();
