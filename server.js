exports.handler = async (event) => {
  const axios = require('axios');
  let position = event.pathParameters;
  let ip = event.queryStringParameters.ip;
  let response = {};
  await axios({method: 'get',
      url: 'https://ep.api.getfastah.com/whereis/v1/json/' + ip,
      headers:{'Fastah-Key': process.env.FastahKey}
  }).then((res) => {
      response = {
          statusCode: 200,
          body: JSON.stringify(res.data)
      }
  }).catch((err) => {
      response = {
          statusCode: 400,
          body:JSON.stringify({
              message: "Invalid ip"
          } )
      }
  })
  return response;
};
