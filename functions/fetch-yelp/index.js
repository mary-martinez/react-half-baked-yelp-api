const fetch = require('node-fetch');
require('dotenv').config({ path: `.env.development.local` });

const handler = async (event) => {
  // add code here to fetch data from yelp API
  // be sure to include the parameters from event.queryStringParameters
  const { zip, search } = event.queryStringParameters;
  try {
    const resp = await fetch(`https://api.yelp.com/v3/businesses/search?location=${zip}&term=${search}`, {
      headers: {
        Authorization: `Bearer ${process.env.YELP_API_KEY}`,
      },
    });
    const returned = await resp.json();
    const json = JSON.stringify(returned.businesses);

    return {
      statusCode: 200,
      body: json
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};

module.exports = { handler };
