// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const axios = require("axios").default;

export default async (req, res) => {
  console.log("process.env.API_URL=", process.env.API_URL);
  console.log("process.env.LAMBDA_API_KEY=", process.env.LAMBDA_API_KEY);

  const data = await axios
    .get(
      process.env.API_URL,
      {
        headers: {
          "x-api-key": process.env.LAMBDA_API_KEY,
        },
      }
    )
    .then(function (response) {
      return response.data.body;
    })
    .catch(function (error) {
      console.log(error);
    });

  if (!data) {
    res.statusCode = 500;
    return;
  }
  res.statusCode = 200;
  res.json(data);
};
