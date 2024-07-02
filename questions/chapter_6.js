
// 1. Create a function that uses the following asynchronous sleep call to print the message 'hello world' after 2 seconds

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

async function waitForHelloWorld(){
    await sleep(2000);
    console.log('Hello World');
};

waitForHelloWorld();



// 2. Write an async function that attempts to fetch data from 'https://api.example.com/nonexistent', which will likely lead to a 404 error. Use try/catch to handle the error and log "Error fetching data" if the request fails.

async function attemptsFetch(){
  
  try {
    const response =  await fetch('https://api.example.com/nonexistent');
    // console.log(response)
    // const data = await response.json()
    // console.log(data);
  }
    catch(error) {
      console.log("Error fetching data");
    }
};
attemptsFetch();



// 3. Write an async function named fetchUserData that makes a GET request to 'https://the-one-api.dev/v2/' using async/await. Log the response to the console, handling any errors that might occur.



// 4. Demonstrate how to make a POST request to 'https://api.example.com/users' to create a new user with JSON data { name: "John", age: 30 } using async/await. Ensure you set the appropriate headers and catch any errors.

