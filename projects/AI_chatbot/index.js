//Initialize the chatgt api, and then we are going to prompt a user for a message, and continue the conversation until the user ens the file

import {OpenAIApi, Configuration} from 'openai';
import {createRequire} from 'module';
const require = createRequire(import.meta.url);
require('dotenv').confg();

// step 1 - initialize chatgpt api

const OPEN_SECRET_KEY = process.env.OPEN_SECRET_KEY;

const configuration = new Configuration({
    apiKey: OPEN_SECRET_KEY
});

const openai = new OpenAIApi(configuration);

// step 2 - create contex for the api (give it some personality)

// step 3 - define the function to retrive the api message based on user input

// step 4 - create a run function that requests a user input